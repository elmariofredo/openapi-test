import * as React from 'react';
import { PrescoringForm } from './prescoring-form/PrescoringForm';

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

          <div>
            <label>Gateway:
              <input
              name="gateway"
              size="100"
              value={ this.state.gateway }
              onChange={ this.handleChange.bind( this ) }/>
            </label>
          </div>

          <div>
            <label>Apikey:
              <input
                name="apikey"
                value={ this.state.apikey }
                onChange={ this.handleChange.bind( this ) }/>
            </label>
          </div>

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
