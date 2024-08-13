import React from 'react'
import BasicPage from './assets/Components/BasicPage'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<BasicPage/>}></Route>
      </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App