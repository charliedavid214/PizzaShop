import React from 'react'
import styled from 'styled-components'
import img1 from "../image/img1.jpg"
import img2 from "../image/img2.jpg"
import img3 from "../image/img3.jpg"
import img15 from "../image/img15.jpg"
import img5 from "../image/img5.jpg"
import img6 from "../image/img6.jpg"
import img7 from "../image/img7.jpg"
import img8 from "../image/img8.jpg"
import img9 from "../image/img9.jpg"
import img10 from "../image/img10.jpg"

const Reservaton = () => {
  return (
    <>
     <Container>
        <Wrapper>
            <Reserve>MAKE YOUR ORDER</Reserve>
            <Input>
                <Date>
                    <input type="date" />
                </Date>
                <Time>
                    <input type="time" />
                </Time>
                <Party>
                    <select>
                        <option value="">Party Size</option>
                        <option value="">1 Person</option>
                        <option value="">2 Person</option>
                        <option value="">3 Person</option>
                        <option value="">4 Person</option>                            
                        <option value="">5 Person</option>
                        <option value="">6 Person</option>
                    </select>
                </Party>
                <Book>
                    <button>Book Now</button>
                </Book>
            </Input>
            <ImageWrap>
                <Img src={img1} />
                <Img src={img2} />
                <Img src={img3} />
                <Img src={img15} />
                <Img src={img5} />
            </ImageWrap>
            <ImageWrap2>  
                <Img src={img6} />
                <Img src={img7} />
                <Img src={img8} />
                <Img src={img9} />
                <Img src={img10} />
            </ImageWrap2>
            <Load>
                <button>Load More</button>
            </Load>
            <Hr>
                <div>

                </div>
            </Hr>
            <Private>Private Events</Private>
            <Fancy>
                FANCY A PIZZA PARTY?
            </Fancy>
            <Text>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit <br></br> Text” or
                double click me to add your own content and make changes to the font. Feel <br></br> free to drag and
                drop me anywhere you like on your page. I’m a great place for you to <br></br> tell a story and let your
                users knows little more about you.
            </Text>
            <Contact>
                <button>Contact Us</button>
            </Contact>
        </Wrapper>
     </Container> 
    </>
  )
}

export default Reservaton

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Reserve = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;
    font-size: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`
const Input = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Date = styled.div`
    margin-right: 20px;
    input{
        width: 310px;
        height: 40px;
        border: 3px solid black;
        cursor: pointer;
        font-size: 20px;
        text-align: center;
        :hover{
            background-color: #ccc;
        }
    }
`
const Time = styled.div`
    margin-right: 20px;
    input{
        width: 310px;
        height: 40px;
        border: 3px solid black;
        cursor: pointer;
        font-size: 20px;
        text-align: center;
        :hover{
            background-color: #ccc;
        }
    }
`
const Party = styled.div`
    margin-right: 20px;
    select{
        width: 310px;
        height: 45px;
        border: 3px solid black;
        border-radius: none;
        cursor: pointer;
        font-size: 20px;
        :hover{
            background-color: #ccc;
        }
    }
    option{
        width: 50px;
        height: 100px;
        cursor: pointer;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`
const Book = styled.div`
    margin-left: 10px;
    button{
        width: 270px;
        height: 46px;
        background-color: black;
        color: white;
        font-size: 20px;
        cursor: pointer;
    }
`
const ImageWrap = styled.div`
    margin-top: 200px;
    cursor: pointer;
    justify-content: space-around;
`
const Img = styled.img`
    width: 234px;
    height: 240px;
    padding-left: 30px;
`
const ImageWrap2 = styled.div`
    margin-top: 30px;
    cursor: pointer;
    justify-content: space-around;
`
const Load = styled.div`
   margin-top: 50px;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin-bottom: 50px;
   button{
    width: 130px;
    height: 40px;
    font-size: 17px;
   } 
`
const Hr = styled.div`
    div{
        width: 100%;
        height: 7px;
        background-color: black;
    }
`
const Private = styled.div`
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
const Fancy = styled.div`
    font-size: 50px;
    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: center;
    align-items: center;
    align-items: center;
    text-align: center;
    margin-top: 100px;
`
const Text = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
`
const Contact = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 50px;
    button{
        border: 2px solid black;
        width: 170px;
        height: 45px;
        font-size: 16px;
        background-color: white;
        :hover{
            background-color: black;
            color: white;
        }
    }
`    
