import React from 'react'
import styled from 'styled-components'

function Banner() {
  return (
    
    <Background>
      <Container>
        <Content>
          <img  src='https://drive.google.com/uc?id=1e_XQ5kk5ejMGdXVYVAe0wnQR842paFTs' alt='logo/img'/>
          <button type='button' className='get-bundle-btn'>Get the disney bundle</button>
          <h4>Stream now: Terms Apply</h4>
          <img src='/images/cta-logo-two.png' alt='logo/img'/>
          <button type='button' className='links'>Sign Up for Disney+ Only</button>
          <button type='button' className='links text-gray'>$7.99/month or $79.99/year.</button>
        </Content>
      </Container>
    </Background>
  )
}

const Background = styled.section`
  background: url('/images/login-background.jpg') center/cover no-repeat;
  height: 95vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px){
    height: 85vh;
  }
  
  @media screen and (min-width: 280px) and (max-width: 767px){
    height: 75vh;
  }
  
`

const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 650px;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) and (max-width: 1200px){
    height: 550vh;
  }
  
  @media screen and (min-width: 280px) and (max-width: 767px){
    max-width: 450px;
    margin-top: 13vh;
  }

  @media screen and (min-width: 375px) and (max-width: 550px){
    max-width: 350px;
    margin-top: 13vh;
  }
  
  @media screen and (min-width: 280px) and (max-width: 375px){
    max-width: auto;
    margin-top: 13vh;
  }

  h4 {
    color: #fff;
    margin: 1vh 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    max-width: 600px;
    object-fit: contain;
    margin-bottom: 1vh;
  }
  > .get-bundle-btn{

    outline: none;
    border: none;
    width: 100%;
    padding: 11.5px 15px;
    align-items: center;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background: #0063e5;
    color: #f9f9f9;
    font-size: 18px;
    transition: all 0.7s ease-in-out;
    border-radius: 0.345rem;
    cursor:pointer;

    @media screen and (min-width: 550px) and (max-width: 1200px){
      padding: 10px 0;
      font-size: 15px;
    }
    
    @media screen and (min-width: 280px) and (max-width: 550px){
      padding: 5px 0;
      font-size: 14px;
    }

    &:hover {
      background: #0085ff;
    }
  }

  > .links {

    outline: none;
    border: none;
    font-size: 19px;
    background: transparent;
    color: #f9f9f9;
    margin-top: 1vh;
    cursor:pointer;

    @media screen and (min-width: 280px) and (max-width: 550px){
      font-size: 15px;
    }
  }

  > .text-gray {
    color: gray;
  }
`;



export default Banner