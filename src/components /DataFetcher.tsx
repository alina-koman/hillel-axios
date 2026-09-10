import {useEffect, useState} from "react"
import type {UserInterface} from "../types/user.interface.ts"
import {fetchData} from "../api/api.ts"

const DataFetcher = () => {
  const [users, setUsers] = useState<UserInterface[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function getUser() {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchData()
        setUsers(data)
      } catch (error: unknown) {
        if (error instanceof Error)
          setError(error)
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [])

  if (loading) {
    return <div>
      <h3>Loading...</h3>
    </div>
  }

  if (error) {
    return <div>
      <h3>Error!</h3>
      <p>{error.message}</p>
    </div>
  }

  return (
    <div>
      <ul>
        {users.map((user) =>
        <li key={user.id}>
          {user.name} - {user.email}
        </li>)}
      </ul>
    </div>
  )
}

export default DataFetcher