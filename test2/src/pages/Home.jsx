import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center mt-10">Welcome to the Home Page</h1>
        <p className="text-center mt-4 text-gray-600">Use the navigation links above to explore the questions.</p>  
        <NavLink to="/question1" className="block text-center mt-4 text-blue-500 hover:underline">Go to Question 1</NavLink>
        <NavLink to="/question2" className="block text-center mt-2 text-blue-500 hover:underline">Go to Question 2</NavLink>
        <NavLink to="/question3" className="block text-center mt-2 text-blue-500 hover:underline">Go to Question 3</NavLink>
    </div>
  )
}

export default Home