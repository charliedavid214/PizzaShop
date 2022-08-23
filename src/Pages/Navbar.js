import React from 'react'
import styled from 'styled-components'
import pizzalogo from '../image/pizzalogo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
                <Logo>
                    <Img src={pizzalogo} />
                </Logo>
                <NavWrap>
                <Home to="/">Home</Home>
                <Order to="/OrderOnline">Order Online</Order>
                <Menu to="/Menu">Menu</Menu>
                <Reservation>Reservations</Reservation>
                <Location>Location & Hours</Location>
                <Login to="/LoginPage">Log In</Login>
            </NavWrap>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
    width: 100%;
    height: 100%;

`
const Wrapper = styled.div`
    display: flex;
    background-color: black;
`
const Logo = styled.div`

`
const Img = styled.img`
    width: 150px;
    height: 60px;
    margin-top: 5px;
`
const NavWrap = styled.div`
    display: flex;
    color: white;
    text-align: center;
    align-items: center;
    justify-content: center !important;
    gap: 70px;
    font-size: 18px;
    position: static;
`
const Home = styled(NavLink)`
     margin-left: 130px;
     color: #cccccc;
     text-decoration: none;
     cursor: pointer;
`
const Order = styled(NavLink)`
    text-decoration: none;
    color: white;
    :hover{
        color: #cccccc;
        cursor: pointer;
    }
`
const Menu = styled(NavLink)`
    text-decoration: none;
    color: white;
    :hover{
        color: #cccccc;
        cursor: pointer;
    }
`
const Reservation = styled.div`
    :hover{
        color: #cccccc;
        cursor: pointer;
    }
`
const Location = styled.div`
    :hover{
        color: #cccccc;
        cursor: pointer;
    }
`
const Login = styled(NavLink)`
    text-decoration: none;
    color: white;
    :hover{
        color: #cccccc;
        cursor: pointer;
    }
`
