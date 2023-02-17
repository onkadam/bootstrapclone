import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'


export default function Layout(props) {
  return (
    <>
    <Header/>
      <main>
        <div className="container h-100 o_cont">
          <div className="row  h-100">
            <Aside cls="o_leftaside">Left Aside</Aside>
            {props.children}
            <Aside cls="o_rightaside">Right Aside</Aside>
          </div>
        </div>
      </main>
      <Footer />
      </>
  )
}

