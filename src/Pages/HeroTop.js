import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import pizza from '../image/pizza.jpg'

const HeroTop = () => {
  return (
    <>
     <Container>
        <Wrapper>
            <ImageWrap>
                <Img src={pizza} />
            </ImageWrap>
            <The>The</The>
            <PizzaShop>PIZZA SHOP</PizzaShop>
            <Takeout>Takeout & Delivery</Takeout>
            <Button to="/OrderOnline">Order Now</Button>
            <Line>
                <div>

                </div>
            </Line>
        </Wrapper>
     </Container> 
    </>
  )
}

export default HeroTop

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const ImageWrap = styled.div`

`
const Img = styled.img`
    position: relative;
`
const The = styled.div`
    position: absolute;
    font-size: 50px;
    top: 400px;
    left: 610px;
    color: white;
`
const PizzaShop = styled.div`
    position: absolute;
    font-size: 100px;
    top: 450px;
    left: 350px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
const Takeout = styled.div`
    position: absolute;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    top: 560px;
    left: 540px;
    color: white;
`
const Button = styled(NavLink)`
    width: 140px;
    height: 40px;
    top: 650px;
    left: 580px;
    font-size: 20px;
    position: absolute;
    border: 2px solid white;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 6px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    :hover{
    background-color: black;
    border: black;
  }
`
const Line = styled.div`
    div{
        position: absolute;
        width: 100%;
        height: 7px;
        background-color: black;
    }
`
