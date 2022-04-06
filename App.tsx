import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import FetchingData from'./src/FetchingData'
import ShowingData from './src/ShowingData'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<FetchingData/>}/>
      <Route path="fetching" element={<ShowingData/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
