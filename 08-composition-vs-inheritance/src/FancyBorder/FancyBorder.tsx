import React from 'react';

function FancyBorder(props: any) {
  return (
    <div>
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    </div>
  )
}

export default FancyBorder
