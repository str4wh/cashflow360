import React from 'react'
import Nav from '../Components/nav'
import Diagonalsplit from '../Components/diagonalsplit'
import Footer from '../Components/footer'
function Howtogetstarted() {
  return (
    <div>
        <Nav />
        <div className="min-h-screen bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-400 text-white px-4">
          <Diagonalsplit />
          <Footer />
        </div>
    </div>
  )
}

export default Howtogetstarted