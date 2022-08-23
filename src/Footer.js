import React from 'react'
import styled from 'styled-components'
import facebook from './image/facebook.png'
import ig from './image/ig.png'

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
        <Footter>
                    <Come>
                        COME GRAB A SLICE
                    </Come>
                    <Address>
                        Sam Ethnan Airforce Base <br></br>
                        Ikeja Lagos,<br></br>
                        Nigeria
                    </Address>
                    <Days>
                        Monday - Friday 007AM - 10:00PM <br></br>
                        Saturday 09:00AM - 10:00PM <br></br>
                        Sunday 08:00AM - 11:00PM
                    </Days>
                    <Tel>
                        Tel: +23480000200
                    </Tel>
                    <Email>
                        Email: info@mysite.com
                    </Email>
                    <Foot>
                        <Facebook>
                            <Img src={facebook} />
                        </Facebook>
                        <Instagram>
                            <Ig src={ig} />
                        </Instagram>
                        <Input>
                            <input type="text" placeholder='Enter Your Email Here' />
                        </Input>
                    </Foot>
                </Footter>
        </Wrapper>
      </Container>
    </>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Footter = styled.div`
    background-color: black;
    margin-top: 70px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
const Come = styled.div`
    padding-top: 50px;
    font-size: 30px;
    font-weight: bold;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Address = styled.div`
    margin-top: 50px;
    margin-left: 150px;
`
const Days = styled.div`
    margin-top: 30px;
    margin-left: 150px;
`
const Tel = styled.div`
    margin-top: 30px;
    margin-left: 150px;
`
const Email = styled.div`
    margin-left: 150px;
`
const Foot = styled.div`
    margin-top: 50px;
    display: flex;
`
const Facebook = styled.div`
    margin-left: 150px;
`
const Img = styled.img`
    
`
const Instagram = styled.div`

`
const Ig = styled.img`
    padding-left: 10px;
    margin-bottom: 40px;
`
const Input = styled.div`
    margin-left: 45%;
    input{
        width: 300px;
        height: 40px;
        padding-left: 30px;
        background-color: black;
        color: white;
        border: 1px solid white;
    }
`

