import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>react with chai and follow to @arey_aks_07 on instagram</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
