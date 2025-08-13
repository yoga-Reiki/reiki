import React from 'react'
import Header from '../componenets/Header'
import Content from '../componenets/Content'
import Footer from '../componenets/Footer'

function DefaultLayout() {
  return (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default DefaultLayout