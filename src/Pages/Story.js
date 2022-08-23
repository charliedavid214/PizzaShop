import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import man from '../image/man.jpg'
import baking from '../image/baking.jpg'


const Story = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <OurStory>OUR STORY</OurStory>
            <Passion>
                THE PASSION FOR PIZZA
            </Passion>
            <ImageWrap>
                <Img src={man} />
            </ImageWrap>
            <Paragraph>
            The pizza universe has seen iconic waves for decades in our <br/> country. The big chains to the small authentic ones, pizza has made <br/> itself a hot spot in our livelihood. Big celebrations to intimate solo <br/> meals, pizza has seen it all. 
            Except the digital wave. <br/> Pizza that is constructed and moulded solely to enjoy at any <br/> destination you choose, but a restaurant. Pizzas have seen <br/> live kitchens, affordable gourmet, delivery-only & ofcourse, <br/> top-of-the-line recipes, but a pizza with all of them? Nahhh…
            </Paragraph>
            <Image>
                <Baking src={baking} />
            </Image>
            <OrderTakeOut>
                <span>ORDER</span> <br/> TAKEOUT
            </OrderTakeOut>
            <See to="/Menu">See Our Menu</See>
            <Fresh>
                FRESH <br/> EAT
            </Fresh>
            <SeeOur to="/Menu">
                See Our Menu
            </SeeOur>
            <Line>
                <div></div>
            </Line>
            <Reservation>
                Order
            </Reservation>
        </Wrapper>
      </Container>
    </>
  )
}

export default Story

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const OurStory = styled.div`
    border: 10px solid black;
    width: 300px;
    background-color: black;
    color: white;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
`
const Passion = styled.div`
    font-size: 44px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 1000;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const ImageWrap = styled.div`
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Img = styled.img`
    width: 600px;
    height: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Paragraph = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: black;
`
const Image = styled.div`
    position: relative;
    margin-top: 100px;
`
const Baking = styled.img`

`
const OrderTakeOut = styled.div`
    position: absolute;
    top: 310%;
    left: 750px;
    border: 10px solid white;
    width: 300px;
    height: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 45px;
    color: white;
    padding-top: 50px;
    cursor: pointer;
    span{
        padding-top: 70px;
        width: 70px;
    }
`
const See = styled(NavLink)`
    position: absolute;
    top: 340%;
    left: 850px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: 540;
    text-decoration: none;
    :hover{
    color: #cccccc;
  }
`
const Fresh = styled.div`
    position: absolute;
    top: 370%;
    left: 300px;
    border: 10px solid white;
    width: 300px;
    height: 200px;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 45px;
    color: white;
    cursor: pointer;
`
const SeeOur = styled(NavLink)`
    position: absolute;
    top: 399%;
    left: 410px;
    font-size: 16px;
    cursor: pointer;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    cursor: pointer;
    font-weight: 540;
    text-decoration: none;
    :hover{
    color: #cccccc;
  }  
`
const Line = styled.div`
    div{
        width: 100%;
        height: 7px;
        background-color: black;
    }
`
const Reservation = styled.div`
    border: 10px solid black;
    width: 300px;
    background-color: black;
    color: white;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
`

