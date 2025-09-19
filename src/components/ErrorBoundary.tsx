import React from "react";
type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: any, info: any) { console.error("UI error:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" className="p-6 max-w-xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-2">Something went wrong.</h2>
          <p className="text-slate-600">Please reload the page or try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}