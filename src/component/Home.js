import React from 'react'
import Main from './Main'

function Home() {
    return (
        <div className='main text-white'>
          
          <div className="text-center my-56 lg:my-56">
          <h1 className="text-5xl font-bold text-white md:text-blue">Make Today Amazing...</h1> 
          <br/>
          <h1 className='text-5xl font-bold text-white mb-20 md:text-blue'>Wear Us Today</h1>
          <a href="#home" className=" py-1 mb-10 text-yellow-500 font-bold border-b-2 border-yellow-500 hover:text-white hover:border-white transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110 cursor:pointer ">Explore</a>
        </div>
          
          <Main/>
        </div>
    )
}

export default Home
