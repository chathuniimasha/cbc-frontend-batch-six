
import './App.css'
import ProductCard from './components/productCard'
import SuperProduct from './components/superProduct'

function App() {
  

  return (
    <>
      <div className='w-full h-screen bg-blue-300'>
        <div className='w-[600px] h-[600px] bg-black flex flex-col justify-around items-center'>
        <div className='w-[75px] h-[75px] bg-[red]'></div>
        <div className='w-[75px] h-[75px] bg-[yellow]'></div>
        <div className='w-[75px] h-[75px] bg-amber-400'></div>
        <div className='w-[75px] h-[75px] bg-amber-900'></div>
        <div className='w-[75px] h-[75px] bg-amber-700'></div>
        <div className='w-[75px] h-[75px] bg-amber-200'></div>
        </div>

      </div>
      
    </>
  )
}

export default App
