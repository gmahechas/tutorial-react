import React, { FC } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

interface IProps {
  description: string;
  value: number;
  isExpense?: boolean;
}

const EntryLine: FC<IProps> = ({ description, value, isExpense }) => {
  return (
    <Segment color={isExpense ? 'red' : 'green'}>
      <Grid columns={3} textAlign='right'>
        <Grid.Row>
          <Grid.Column width={10} textAlign='left'>
            {description}
          </Grid.Column>
          <Grid.Column width={3} textAlign='right'>
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name='edit' bordered />
            <Icon name='trash' bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

EntryLine.defaultProps = {
  isExpense: false,
};

export default EntryLine;
