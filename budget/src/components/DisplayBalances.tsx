import React from 'react';
import { Grid, GridColumn, Segment } from 'semantic-ui-react';

import DisplayBalance from './DisplayBalance';

const DisplayBalances = () => {
  return (
    <Segment textAlign='center'>
      <Grid columns={2} divided>
        <Grid.Row>
          <GridColumn>
            <DisplayBalance title='Income' value={1253.54} color='green' />
          </GridColumn>
          <GridColumn>
            <DisplayBalance title='Expenses' value={623.5} color='red' />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
