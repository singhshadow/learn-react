import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>react with chai and follow to @arey_aks_07 on instagram</h1>
    </UserContextProvider>
  )
}

export default App
