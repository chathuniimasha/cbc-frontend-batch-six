
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    
    <BrowserRouter>
      <div className='w-full h-screen flex justify-center item-center'>
        
          <Toaster position='top-right'/>
          <Routes path='/'>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin/*'element={<AdminPage/>}/>



          </Routes>

        </div>
        
        
    </BrowserRouter>

      
      
    
  )
}

export default App
