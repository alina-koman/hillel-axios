import type {FallbackProps} from "react-error-boundary"

type ErrorTextProps = {
  error: FallbackProps["error"]
  resetErrorBoundary?: FallbackProps["resetErrorBoundary"]
  onRetry?: () => void
}

const ErrorText = ({error, resetErrorBoundary, onRetry}: ErrorTextProps) => {
  const handleRetry = () => {
    onRetry?.()
    resetErrorBoundary?.()
  }
  const message = error instanceof Error ? error.message : "Unknown error"

  return (
    <main>
      <section role="alert">
        <span aria-hidden="true">!</span>
        <h1>Something went wrong</h1>
        <p>{message}</p>
        <button type="button" onClick={handleRetry}>
          Try again
        </button>
      </section>
    </main>
  )
}

export default ErrorText