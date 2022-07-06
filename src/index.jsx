import React from 'react'
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import './main.css'
import store from './Redux/store'
import Home from './Pages/Home'
import Employees from './Pages/Employees'
import ErrorPage from './Pages/Error'

const root = createRoot(document.getElementById('root'));

root.render(
  <Router >
      <Provider store={store}>
        <Routes >
          <Route exact path="/" element={ <Home />} />
          <Route path='/employees' element={<Employees />} />
          <Route path="*" element ={<ErrorPage type="404"/>} />
        </Routes>
      </Provider>
  </Router>
)