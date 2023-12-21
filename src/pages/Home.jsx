import React from 'react'
import AddDetails from '../components/AddDetails'
import Table from '../components/Table'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-white">
        <div className="mb-4 bg-gray-400">
        <h1 className="text-center text-2xl font-bold mb-8 mt-2">
            Insert Your Details
          </h1>
        <AddDetails />
        </div>
        </div>
       
 
    <Table/>

    <button className="m-5 float-left">
        <Link to = "/profile"  className="p-2  m-5 bg-black font-bold text-2xl text-white rounded-lg w-1/2" > Go to Profile</Link>
        </button>
    </>
  )
}

export default Home