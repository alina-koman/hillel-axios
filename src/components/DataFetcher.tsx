import {useEffect, useState} from "react"
import type {UserInterface} from "../types/user.interface.ts"
import {fetchData} from "../api/api.ts"
import Loader from "./Loader.tsx"
import ErrorText from "./ErrorText.tsx";

const DataFetcher = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchData()
        setUsers(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [attempt])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <ErrorText error={error} onRetry={() => setAttempt((value) => value + 1)} />
  }

  return (
    <main>
      <header>
        <p>Directory</p>
        <h1>Our users</h1>
      </header>
      <ul>
        {users.map((user) =>
        <li key={user.id}>
          <strong>{user.name}</strong>
          <span>{user.email}</span>
        </li>)}
      </ul>
    </main>
  )
}

export default DataFetcher