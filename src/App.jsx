
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'

function App() {
  

  return (
    
    <BrowserRouter>
      <div className='w-full h-screen flex justify-center item-center'>
        <div className='w-[calc(100vw-35px)] h-[calc(100vw-15px)] border border-red-700'>
          <Routes path='/'>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin/*'element={<AdminPage/>}/>



          </Routes>

        </div>
        
        </div>
    </BrowserRouter>

      
      
    
  )
}

export default App
