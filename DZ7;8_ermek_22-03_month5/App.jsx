import './App.css'
import { Route, Routes } from 'react-router-dom'
import Head from './pages/Head.jsx'
import MainPage from './pages/MainPage'
import BagPage from './pages/BagPage.jsx'


function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Head/>}>
          <Route index element={<MainPage/>}></Route>
          <Route path='/cart' element={<BagPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
