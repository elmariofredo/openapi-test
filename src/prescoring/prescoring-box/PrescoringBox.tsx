import * as React from 'react';
import { PrescoringForm } from './prescoring-form/PrescoringForm';

import { Textfield } from 'react-mdl';

type PrescoringFormState = {
  gateway?: string,
  apikey?: string
}

export class PrescoringBox extends React.Component<void, PrescoringFormState> {

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
      <div>
        <fieldset>

          <legend>Gateway setup:</legend>

          <Textfield
              onChange={this.handleChange.bind( this )}
              label="Gateway"
              name="gateway"
              value={this.state.gateway}
              floatingLabel
          />

          <Textfield
              onChange={this.handleChange.bind( this )}
              label="Apikey"
              name="apikey"
              value={this.state.apikey}
              floatingLabel
          />

        </fieldset>

        <fieldset>

          <legend>Form:</legend>

          <PrescoringForm
            gateway={ this.state.gateway}
            apikey={ this.state.apikey }/>

        </fieldset>

      </div>
    );

  }

}
