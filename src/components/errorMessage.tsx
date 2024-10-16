import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      return (
        <div className="error-container">
          <h1>Oops! Something went wrong.</h1>
          <p>We're working to get this fixed. Please try again later.</p>
        </div>
      );
    }
  
    return;

  }
  
}

export default ErrorBoundary;
