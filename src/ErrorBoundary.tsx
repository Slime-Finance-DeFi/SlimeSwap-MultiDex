/* eslint-disable */
import React from 'react'
import styled from 'styled-components'

const Header1 = styled.h1`
  color: ${({ theme }) => theme.colors.text};
`

const PreColor = styled.pre`
  color: ${({ theme }) => theme.colors.text};
`

const ErrorHeader: React.FC<any> = ({ errorInfo }) => (
  <div>
    <Header1>Something went wrong.</Header1>
    <PreColor>{errorInfo && errorInfo.componentStack.toString()}</PreColor>
  </div>
)

class ErrorBoundary extends React.Component<{}, { hasError: boolean; error: any; errorInfo: any }> {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: undefined, errorInfo: undefined }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) console.log('ERROR', this.state.error)
    return this.state.hasError ? <ErrorHeader errorInfo={this.state.errorInfo} /> : this.props.children
  }
}

export default ErrorBoundary
