import React from 'react'
import { Outlet } from 'react-router-dom'

function Root() {
  return (
    <div className='container'>
    <header>
        <h1>Header</h1>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <h1>Footer</h1>
    </footer>
    </div>
  )
}

export default Root