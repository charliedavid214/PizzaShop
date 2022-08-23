import React from 'react'
import styled from 'styled-components'
import HeroTop from "./HeroTop"
import Story from "./Story";
import Reservaton from "./Reservaton";

const Hompage = () => {
  return (
    <>
      <Container>
        <HeroTop/>
        <Story/>
        <Reservaton/>
      </Container>
    </>
  )
}

export default Hompage

const Container = styled.div`
    width: 100%;
    height: 100%;
`
