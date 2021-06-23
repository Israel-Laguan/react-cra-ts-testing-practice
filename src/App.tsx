import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './pages/MainPage'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact component={MainPage} path="/" />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
