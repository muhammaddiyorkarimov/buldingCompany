// css
import './App.css'

// react router dom
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from 'react-router-dom'

import './i18n';

// layouts
import RootLayout from './layout/RootLayout'
// pages
import Home from './pages/Home'
import OurWorkers from './pages/OurWorkers'
import OurServices from './pages/OurServices'
import Contact from './pages/Contact'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path='/our-workers' element={<OurWorkers/>} />
        <Route path='/services' element={<OurServices/>} />
        <Route path='/contacts' element={<Contact/>} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App