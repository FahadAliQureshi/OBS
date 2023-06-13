/** @format */
import React, { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log("dam dama dam", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>BHAINS KI DUM </h2>;
    }
    return <div>{this.props.children}</div>;
  }
}
