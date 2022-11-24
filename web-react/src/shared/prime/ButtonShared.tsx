import React from 'react'

import { Button } from 'primereact/button';

function ButtonShared(props: any) {
  return <Button label={props.label} className={props.classname} />
}

export default ButtonShared;
