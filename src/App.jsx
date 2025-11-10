
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/loginPage'
import RegisterPage from './pages/registerPage'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import UpdateProductPage from './pages/admin/updateProduct'
import ClientWebPage from './pages/client/clientPage'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ForgetPasswordPage from './pages/client/forgetPassword'



function App() {
  

  return (
    
    <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <div className='w-full h-screen flex justify-center item-center bg-primary text-secondary'>
        
          <Toaster position='top-right'/>
          <Routes path='/'>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/test' element={<TestPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin/*'element={<AdminPage/>}/>
          <Route path='/forget' element={<ForgetPasswordPage/>}/>
          <Route path='/*'element={<ClientWebPage/>}/>
          



          </Routes>

        </div>
        
        </GoogleOAuthProvider>
    </BrowserRouter>

      
      
    
  )
}

export default App
