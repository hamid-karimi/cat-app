import React, { Component, ErrorInfo } from "react";
import * as styled from "./styles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <styled.ErrorContainer>
          <styled.ErrorTitle>Error Title</styled.ErrorTitle>
          <button>Retry</button>
        </styled.ErrorContainer>
      );
    }
    return this.props.children;
  }
}
