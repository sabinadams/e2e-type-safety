import UserDisplay from './components/UserDisplay'
import { useQuery } from 'urql'
import { GetUsersDocument } from './graphql/generated'

function App() {
  const [result] = useQuery({
    query: GetUsersDocument
  })

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center p-4 gap-y-12 overflow-scroll">
      {
        result?.data?.users.map((user) => <UserDisplay user={user} />)
      }
    </div>
  )
}

export default App