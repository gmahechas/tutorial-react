import React from 'react'

/* export default function FancyButton(props: any) {
  return (
    <button className="FancyButton">
      {props.children}
    </button>
  )
} */

export const FancyButton = React.forwardRef((props: any, ref: any) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));
