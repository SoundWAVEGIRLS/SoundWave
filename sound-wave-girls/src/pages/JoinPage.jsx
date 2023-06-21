import React from 'react'
import './JoinPage.css'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'

function JoinPage() {
  return (
    <div className='joinPage'>
    <BackgroundJoin>
    <NavBar />
    </BackgroundJoin>
    <Form />
    <Footer />
    </div>
  )
}

export default JoinPage
