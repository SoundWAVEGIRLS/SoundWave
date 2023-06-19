import React from 'react'
import './JoinPage.css'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import BackgroundJoin from '../components/BackgroundJoin/BackgroundJoin'

function JoinPage() {
  return (
    <div className='joinPage'>
    <BackgroundJoin>
    <NavBar />
    <Form />
    </BackgroundJoin>
    <Footer />
    </div>
  )
}

export default JoinPage
