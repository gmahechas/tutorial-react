import React from 'react';

class ButtonArgs extends React.Component<any> {

/*   constructor(props: any) {
    super(props);
    this.deleteRow = this.deleteRow.bind(this);
    this.destroyRow = this.destroyRow.bind(this);
  } */

  deleteRow(event: React.MouseEvent, id: number) {
    event.preventDefault();
    console.log('Id:::', id);
  }

  destroyRow(id: number) {
    console.log(this);
    console.log('Id:::', id);
  }

  render() {
    return (
      <div>
        {[1, 2, 3].map(num =>
          <button onClick={(event) => this.deleteRow(event, num)} key={num}>Delete Row {num}</button> /* RECOMMENDED !!!!!!!!!! */
        )}
        {/* <button onClick={this.destroyRow.bind(this, 2)}>Delete Row</button> */} {/* THIS AFFECTS PERFORMANCE */}
      </div>
    );
  }
}

export default ButtonArgs;