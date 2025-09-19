
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import UpdateProductPage from './pages/admin/updateProduct'
import ClientWebPage from './pages/client/clientPage'

function App() {
  

  return (
    
    <BrowserRouter>
      <div className='w-full h-screen flex justify-center item-center'>
        
          <Toaster position='top-right'/>
          <Routes path='/'>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin/*'element={<AdminPage/>}/>
          <Route path='/*'element={<ClientWebPage/>}/>
          



          </Routes>

        </div>
        
        
    </BrowserRouter>

      
      
    
  )
}

export default App
