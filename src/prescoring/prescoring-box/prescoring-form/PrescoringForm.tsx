import * as React from 'react';
import { Component } from 'react';

import 'whatwg-fetch';
import { Thumbs } from './thumbs';
import { assign } from 'lodash';

import { Button, Textfield } from 'react-mdl';

type PrescoringFormProps = {
  gateway: string,
  apikey: string
}

type PrescoringFormState = {
  passed?: boolean | null,
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


      } )
      .catch( ( error ) => {

        alert( error );

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

        <Textfield
            onChange={this.handleChange.bind( this )}
            label="First Name"
            name="firstName"
            value={this.state.data.firstName}
            floatingLabel
        />

        <Textfield
            onChange={this.handleChange.bind( this )}
            label="Last Name"
            name="lastName"
            value={this.state.data.lastName}
            floatingLabel
        />

        <Textfield
            onChange={this.handleChange.bind( this )}
            label="Personal ID"
            name="personalIdentificationNumber"
            value={this.state.data.personalIdentificationNumber}
            pattern="[0-9]*(\.[0-9]+)?"
            error="Input is not a number!"
            floatingLabel
        />

        <Button raised colored>Button</Button>
      </form>
    );

  }

}

