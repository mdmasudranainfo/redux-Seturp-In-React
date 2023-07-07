import { createBrowserRouter } from 'react-router-dom'
import App from '../App'

import NotFoundPage from '../page/NotFoundPage'
import Login from '../page/Login'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default routes
