import React from 'react'
import styled from 'styled-components'
import img9 from '../image/img9.jpg'

const Menu = () => {
  return (
    <>
      <Container>
        <Wrapper>
        <ImageWrap>
            <Img src={img9} />
          </ImageWrap>
          <MenuSection>
            <OurMenu>
              OUR MENU
              <MENU>MENU</MENU>
            </OurMenu>
          </MenuSection>
          <Antipasti>ANTIPASTI</Antipasti>
          <This>
            This is a section of your menu. Give your section a brief description
            <div></div>
          </This>
          <Content>
            <House>
              HOUSE ANTIPASTI
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </House> 

            <Fresh>
              FRESH ARUGULA
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </Fresh>  
          </Content>
          
          <Content>
            <House>
              HOUSE ANTIPASTI
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </House> 

            <Fresh>
              FRESH ARUGULA
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </Fresh>  
          </Content>

          <Pizzas>PIZZAS</Pizzas>
          <This>
            This is a section of your menu. Give your section a brief description
            <div></div>
          </This>
          <Content>
            <House>
              MARGHERITA
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </House> 

            <Fresh>
              FUNGHI
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </Fresh>  
          </Content>

          <Content>
            <House>
              ARTICHOKE
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </House> 

            <Fresh>
              MARINARA
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </Fresh>  
          </Content>
          
          <Content>
            <House>
              PROSCIUTTO
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </House> 

            <Fresh>
              PEPPERONI
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </Fresh>  
          </Content>

          <Content>
            <Salsiccia>
              SALSICCIA
              <Description>
              This is an item on your menu. Give your <br/> item a brief description
            </Description>
            <Amount>N6000</Amount>
            </Salsiccia>  
          </Content>
        </Wrapper>
      </Container>
    </>
  )
}

export default Menu

const Container = styled.div`
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const ImageWrap = styled.div`
  width: 100%;
  height: 20%;
  position: relative;
`
const Img = styled.img`
  width: 100%;
  height: 350px;
  position: relative;
`
const MenuSection = styled.div`

`
const OurMenu = styled.div`
  position: absolute;
  top: 150px;
  background-color: white;
  width: 70%;
  justify-content: center;
  text-align: center;
  margin-left: 15%;
  font-size: 50px;
  font-weight: 800;
  padding-top: 40px;
  height: 229px;
`
const MENU = styled.div`
  font-size: 27px;
  font-weight: 400;
  padding-top: 90px;
`
const Antipasti = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 35px;
  font-weight: 900;
  padding-top: 40px;
`
const This = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  font-size: 17px;
  div{
    width: 50px;
    height: 1px;
    background-color: gray;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }
`
const Content = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`
const House = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: 310px;
`
const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
`
const Fresh = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-right: 323px;
`
const Amount = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 20px;
`
const Pizzas = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 35px;
  font-weight: 900;
  padding-top: 100px;
`
const Salsiccia = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin-left: auto;
  margin-right: auto;
`
