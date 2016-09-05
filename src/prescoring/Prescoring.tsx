import * as React from 'react';
import { PrescoringForm } from './prescoring-form/PrescoringForm';

import { Textfield, Grid, Cell } from 'react-mdl';

type PrescoringFormState = {
  gateway?: string,
  apikey?: string
}

export class Prescoring extends React.Component<void, PrescoringFormState> {

  constructor() {

    super();

    this.state = {
      gateway: 'http://localhost:8090/scoring/prescoring',
      apikey: 'fakeAPIkey'
    };

  }

  handleChange( event: any ) {

    this.setState({
      [ event.target.name ]: event.target.value
    })

  }

  render() {

    return (
      <Grid>

        <Cell col={12}>
          <h3>Gateway setup:</h3>
        </Cell>

        <Cell col={12}>

          <Grid>

            <Cell col={12}>

              <Textfield
                  onChange={this.handleChange.bind( this )}
                  label="Gateway"
                  name="gateway"
                  value={this.state.gateway}
                  floatingLabel
                  style={{width: '500px'}}
              />

            </Cell>

            <Cell col={12}>

              <Textfield
                  onChange={this.handleChange.bind( this )}
                  label="Apikey"
                  name="apikey"
                  value={this.state.apikey}
                  floatingLabel
                  style={{width: '500px'}}
              />

            </Cell>

          </Grid>

          <h3>Form:</h3>

          <PrescoringForm
            gateway={ this.state.gateway}
            apikey={ this.state.apikey }/>

        </Cell>

      </Grid>
    );

  }

}
