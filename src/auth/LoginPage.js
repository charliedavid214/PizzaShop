import React from 'react'
import styled from 'styled-components'
import img9 from '../image/img9.jpg'

const LoginPage = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <ImageWrap>
            <Img src={img9} />
          </ImageWrap>
          <form action='Hompage.js'>
          <LOGIN>
            LOGIN
            <Login>Login</Login>
          </LOGIN>
          <Email>
            Email <br/>
            <input type="text" placeholder="Enter your email" required />
          </Email>
          <Password>
            Password <br/>
            <input type="text" placeholder="Enter your password" required />
          </Password>
          <Submit>
          <input type="submit" value="Login" />
          </Submit>
          </form>
          <Dont>
            Don't have an account yet?<span>Create Account</span>
          </Dont>
        </Wrapper>
      </Container> 
    </>
  )
}

export default LoginPage

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
const LOGIN = styled.div`
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
const Login = styled.div`
  font-size: 27px;
  font-weight: 400;
  padding-top: 90px;
`
const Email = styled.div`
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 20px;
  input{
    width: 30%;
    padding: 10px;
    border: 1px solid black;
    outline: none;
    :hover{
      background-color: #ccc;
    }
  }
`
const Password = styled.div`
  font-size: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  input{
    width: 30%;
    padding: 10px;
    border: 1px solid black;
    outline: none;
    :hover{
      background-color: #ccc;
    }
  }
`
const Submit = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 30px;
  input{
    width: 32%;
    padding: 10px;
    border: 1px solid black;
    outline: none;
    font-size: 17px;
    background-color: black;
    color: white;
  }
`
const Dont = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  color: black;
  margin-top: 10px;
  span{
    border-bottom: 1px solid black;
  }
`
