import * as React from 'react';
import { Component } from 'react';

import 'whatwg-fetch';
import { Thumbs } from './thumbs';
import { assign } from 'lodash';

import { Button, Textfield, Grid, Cell, ProgressBar } from 'react-mdl';

type PrescoringFormProps = {
  gateway: string,
  apikey: string
}

type PrescoringFormState = {
  passed?: boolean | null,
  loading?: boolean,
  data?: any
}

export class PrescoringForm extends Component<PrescoringFormProps, PrescoringFormState> {

  constructor() {

    super();

    this.state = {
      passed: null,
      data: {
        "registerCheckConsent": true,
        "identityCardNumber": "123456748",
        "identityCardValidity": "2024-02-10",
        "phoneNumber": {
          "countryCode": "+420",
          "number": "123456789"
        },
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "addresses": [
          {
            "streetAddress": "Legerova",
            "streetNumber": "12",
            "city": "Prague",
            "zip": "11000",
            "addressType": "CONTACT"
          }
        ],
        "personalIdentificationNumber": "7802101234"
      }
    };

  }

  handleSubmit( event: any) {

    event.preventDefault();

    this.setState({ loading: true });

    fetch( this.props.gateway,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'apikey': this.props.apikey
        },
        body: JSON.stringify( this.state.data )
      }
    )
      .then( (response: any) => {

        return response.json();

      })
      .then(  (data: any) => {

        if ( data.resultCode ) {

          this.setState({
            passed: data.resultCode === 'PASSED'
          });

        } else {

          alert( 'Error: missing resultCode in answer' + JSON.stringify(data) )

        }

        this.setState({ loading: false });

      } )
      .catch( ( error ) => {

        alert( error );

        this.setState({ loading: false });

      });

  }

  handleChange( event: any ) {

    const newData = assign( {}, this.state.data, {
      [ event.target.name ]: event.target.value
    } );

    this.setState( {
      data: newData
    } );

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit.bind( this )}>

        <Grid>

          <Cell col={2}>

            <Textfield
                onChange={this.handleChange.bind( this )}
                label="First Name"
                name="firstName"
                value={this.state.data.firstName}
                floatingLabel
            />

          </Cell>

          <Cell col={2}>

            <Textfield
                onChange={this.handleChange.bind( this )}
                label="Last Name"
                name="lastName"
                value={this.state.data.lastName}
                floatingLabel
            />

          </Cell>

          <Cell col={12}>

            <Textfield
                onChange={this.handleChange.bind( this )}
                label="Personal ID"
                name="personalIdentificationNumber"
                value={this.state.data.personalIdentificationNumber}
                pattern="[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                floatingLabel
            />

          </Cell>

          <Cell col={12}>

            <Textfield
                onChange={this.handleChange.bind( this )}
                label="Card Valid To (YYYY-MM-DD)"
                name="identityCardValidity"
                value={this.state.data.identityCardValidity}
                pattern="[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])"
                error="Input is not a valid date!"
                floatingLabel
            />

          </Cell>

          <Cell col={12}>

            <Button raised colored>Button</Button>

          </Cell>

          <Cell col={12}>

            { this.state.loading ? <ProgressBar indeterminate={true}/> : '' }

            <h3>
              <Thumbs value={this.state.passed}/>
            </h3>

          </Cell>

        </Grid>

      </form>
    );

  }

}

