//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
//import heroImg from './assets/hero.png'
import './App.css'
import { Link, Outlet } from 'react-router-dom'

function App() {
  //const [count, setCount] = useState(0)

  return (
     <div>

       <header className='bg-light p-2 d-flex fs-5 fw-bold justify-content-between align-items-center'>
          <span className='bi bi-pencil-square fs-2 text-primary'> <Link to="/" className='text-decoration-none textsize'> Quick Tasks </Link> </span>   
          <nav>
              <span className='textsize1'>Home</span>
              <span className='mx-4 textsize1'>Pricing</span>
              <span className='textsize1 txtright'>Features</span>
          </nav>
          <span className='bi bi-question-circle textsize btn btn-primary'> Help </span>
       </header>


       <section style={{height:'500px'}} className='p-4'>
           <Outlet />
       </section>


       <footer className='bg-light text-dark p-3 d-flex justify-content-around mt-5'>
            <span>Quick Tasks</span>
            <span>&copy; copyright 2026. Quick Tasks All Rights Reserved</span>
       </footer>


    </div>    
  )
}

export default App
