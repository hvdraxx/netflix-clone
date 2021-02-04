import React, { useEffect, useState } from 'react'
import { Container, Logo, Avatar } from './Navbar.styled'

function Navbar() {
  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      }
      else handleShow(false)
    })
    // return () => {
    //   window.removeEventListener('scroll')
    // }
  }, [])

  return (
    <Container className={show ? 'background' : undefined}>
      <Logo
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix Logo'
      />

      <Avatar
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      /> 
    </Container>    
  )
}

export default Navbar
