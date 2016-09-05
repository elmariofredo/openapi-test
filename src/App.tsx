import * as React from 'react';
import { StatelessComponent } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

import { Prescoring } from './prescoring/Prescoring';


export const App: StatelessComponent<void> = () => {

  return (
    <Layout>
        <Header title="Prescoring" scroll></Header>
        <Content>
            <Prescoring/>
        </Content>
    </Layout>
  );

}
