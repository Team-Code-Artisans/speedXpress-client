import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './routes/Routes'

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
      <Toaster />
    </div>
  )
}

export default App
