import React from 'react'
import Header from '../componenets/Header'
import Content from '../componenets/Content'
import Footer from '../componenets/Footer'
import { useLocation } from 'react-router-dom';

function DefaultLayout() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Content />
      {location.pathname !== "/error" && <Footer />}
    </div>
  )
}

export default DefaultLayout