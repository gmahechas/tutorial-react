import React, { Component } from 'react'

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // También puedes registrar el error en un servicio de reporte de errores
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
