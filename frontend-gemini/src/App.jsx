import DisplayMessages from "./components/DisplayMessages"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Login from "./components/Login.jsx"
import './App.css'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Register from "./components/Register.jsx"
import { Toaster } from "react-hot-toast"

function App() {

    return (
       <>
       <div className="font-serif">
         <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />} />

                <Route path="/" element={
                    <div className="flex h-screen">
                        <Sidebar />
                        <div className="w-full">
                            <Navbar />
                            <Outlet />
                        </div>
                    </div>
                }>
                    <Route path="/new-chat" element={<DisplayMessages />} />
                    <Route path="/:chatId" element={<DisplayMessages />} />
                </Route>
            </Routes>
        </BrowserRouter>
       </div>
       <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
          error: {
            duration: 4000,
          },
        }}
      />
       
       </>
    )
}

export default App
