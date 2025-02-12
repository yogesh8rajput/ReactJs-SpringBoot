import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Components/AuthContext.jsx'
import { Flip, ToastContainer, Zoom } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <AuthProvider> */}

    <BrowserRouter>
    <App/>
    <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// className="stroke-slate-950"
transition={Flip}
/>
    </BrowserRouter>
    {/* </AuthProvider> */}
  </StrictMode>,
)
