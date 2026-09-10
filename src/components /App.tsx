import DataFetcher from "./DataFetcher.tsx"
import {Suspense} from "react"
import Loader from "./Loader.tsx"
import {ErrorBoundary} from "react-error-boundary"
import ErrorText from "./ErrorText.tsx"

function App() {
  return (
      <ErrorBoundary FallbackComponent={ErrorText}>
          <Suspense fallback={<Loader />}>
              <DataFetcher />
          </Suspense>
      </ErrorBoundary>
  )
}

export default App
