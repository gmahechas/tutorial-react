import React from 'react';

import { Store } from './Context';

export default function Parent(props: any) {
  const text = 'text changed';
  return <Store.Provider value={{ text }}>{props.children}</Store.Provider>;
}