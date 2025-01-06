import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import routers from './routers/routers';

const App = () => {
  return (
    <div className='App'>
      <Routes>
      {/* <Route element={<Home/>} path={'/'} /> */}

          {
            routers.map((route)=> <Route key={route.id} element={route.element} path={route.path} />  )
          }        
      </Routes>
    </div>
  )
}

export default App