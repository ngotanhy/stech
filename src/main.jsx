import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/configRedux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import App from './App'
import BookingTicket from './pages/bookingTicket/BookingTicket'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<App />}>
              <Route path='/bookingticket' element={<BookingTicket/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
