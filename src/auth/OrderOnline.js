import React from 'react'
import styled from 'styled-components'
import img9 from '../image/img9.jpg'

const OrderOnline = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ImageWrap>
            <Img src={img9} />
          </ImageWrap>
          <OrderSection>
            <Order>
              ORDER ONLINE
            </Order>
            <Pickup>
              <button>Pickup, ASAP (in 15 minutes) <span>Change</span></button>
            </Pickup>
            <List>
            <select>
              <option>MENU</option>
            </select>
            <StraightLine>|</StraightLine>
            <Pizzas>PIZZAS</Pizzas>
            </List>
            <Line>
              <div></div>
            </Line>
          </OrderSection>
          <Content>
            <Menu>MENU</Menu>
            <Classics>CLASSICS</Classics>
            <This>
            This is a section of your menu. Give your section a brief description
            </This>
            <Card>
              <Pepperoni>
                PEPPERONI SUPREME
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                VEGGIE SUPREME
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>
            
            <Card>
              <Pepperoni>
                BBQ BEEF
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                BBQ CHICKEN
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>

            <Card>
              <Pepperoni>
                CHICKEN SUPREME
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                CHICKEN PIE
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>

            <Favourites>FAVOURITES</Favourites>
            <This>This is an item on your menu. Give your item a brief description</This>
            <Card>
              <Pepperoni>
                CHICKEN SUYA
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                MEATZZA
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>

            <Card>
              <Pepperoni>
                DULEXE
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                BEEF SUYA
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>

            <Card>
              <Pepperoni>
                SHAWARMA
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                PLANTAIN
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>

            <Card>
              <Pepperoni>
                SWEET CHILLI
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Pepperoni>
              
              <Veggie>
                PEPPERSOUP
                <Description>
                This is an item on your menu. Give your item a brief description
                </Description>
                <Price>N6000</Price>
              </Veggie>
            </Card>
          </Content>
        </Wrapper>
      </Container>
    </>
  )
}

export default OrderOnline

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
const OrderSection = styled.div`
  
`
const Order = styled.div`
  position: absolute;
  top: 150px;
  background-color: white;
  width: 80%;
  justify-content: center;
  text-align: center;
  margin-left: 10%;
  font-size: 50px;
  font-weight: 800;
  padding-top: 40px;
  height: 229px;

`
const Pickup = styled.div`
  position: absolute;
  top: 300px;
  left: 155px;
  button{
    font-size: 17px;
    width: 350px;
    height: 40px;
    background-color: white;
    cursor: pointer;
    border: 1px solid black;
    span{
      margin-left: 10px;
      border-bottom: 1px solid black;
    }
  }
 `
const List = styled.div`
  position: absolute;
  display: flex;
  top: 370px;
  left: 180px;
  select{
    width: 200px;
    height: 50px;
    border: none;
    font-size: 17px;
  }
`
const StraightLine = styled.div`
  display: flex;
  font-size: 30px;
  padding-left: 30px;
  padding-bottom: 10px;
  color: gray;
`
const Pizzas = styled.div`
  display: flex;
  font-size: 17px;
  padding-left: 50px;
  padding-top: 10px;
`
const Line = styled.div`
  width: 77%;
  height: 1px;
  background-color: gray;
  margin-left: 155px;
`
const Content = styled.div`
  margin-left: 155px;
`
const Menu = styled.div`
  margin-top: 30px;
  font-size: 28px;
  font-weight: 900;
`
const Classics = styled.div`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 900;
`
const This = styled.div`
  padding-top: 10px;
  font-size: 17px;
`
const Card = styled.div`
  margin-top: 30px;
  cursor: pointer;
  display: flex;
`
const Pepperoni = styled.div`
  border: 1px solid gray;
  width: 460px;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 15px;
  font-weight: 900;
`
const Description = styled.div`
  padding-top: 10px;
  font-weight: 400;
`
const Price = styled.div`
  padding-top: 20px;
  font-weight: 400;
  padding-bottom: 20px;
`
const Veggie = styled.div`
  border: 1px solid gray;
  width: 460px;
  padding-left: 20px;
  padding-top: 20px;
  font-size: 15px;
  font-weight: 900;
  margin-left: 30px;
`
const Favourites = styled.div`
  margin-top: 40px;
  font-size: 18px;
  font-weight: 900;
`
