import {Component, ErrorInfo} from 'react';
import * as Styled from './styles';
import {Props, State} from './index.types.d';

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Styled.ErrorContainer>
          <Styled.ErrorTitle>Error Title</Styled.ErrorTitle>
          <button>Retry</button>
        </Styled.ErrorContainer>
      );
    }
    return this.props.children;
  }
}
