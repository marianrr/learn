import { useState, useEffect } from 'react'
import mysql from 'mysql2/promise'

const configure = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users'
}


function App() {
  //console.log(import.meta.env.MODE, import.meta.env)


  // useEffect(() => {






  // } ,[])





  return (
    <>
      <nav>
        <button>login</button>
        <button>signup</button>
      </nav>
      <h1>Welcome to Home page</h1>
    </>
  )
}

export default App
