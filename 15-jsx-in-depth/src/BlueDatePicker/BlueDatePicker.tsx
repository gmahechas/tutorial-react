import React from 'react'

const MyComponents = {
  DatePicker: function DatePicker(props: any) {
    return <div>Imagine a {props.color} datepicker here.</div>
  }
}

export default function BlueDatePicker() {
  return <MyComponents.DatePicker color="blue" />
}
