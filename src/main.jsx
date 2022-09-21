import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home'
import { Movie } from './pages/Movie'
import { Search } from './pages/Search'
import { App } from "./App/App";
import './Styles/global.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<Movie />} />
      <Route path='search' element={<Search />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
