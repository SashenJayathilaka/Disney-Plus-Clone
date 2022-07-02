import React from 'react'
import styled from 'styled-components'

const NightWatch = () => {
    return (

        <Section>
            <Container>
                <TextInfo>
                    <h1 className='disney-tittles'>Virtual Movie Nights with</h1>
                    <h1 className='disney-tittles '>GroupWatch</h1>
                    <li>Watch together, even when apart</li>
                    <li>Stream with up to 6 friends</li>
                    <li>Pause, rewind, react together</li>
                    <li>Easy setup and Sharing</li>
                </TextInfo>
                <ImageInfo>
                    <img src='https://drive.google.com/uc?id=1PD4BNr7JnJ3KkwmT5-5JW0hYd7VgEcH-' alt='' />
                </ImageInfo>
            </Container>
        </Section>
    )
}

const Section = styled.section`
    padding: 50px 5%;
    position: relative;
    background: transparent;

    
    @media screen and (min-width: 991px) {
        padding: 35px;
      }

      @media screen and (min-width: 767px) {
        padding: 25px;
      }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media screen and (max-width: 991px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

const TextInfo = styled.div`
    width: 50%;
    margin-left: 10%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (min-width: 991px) {
        width: 100%;
        padding: 0;
    }

    li{
        font-size: 1.1rem;
        font-weight: 100;

        @media screen and (min-width: 375px) and  (max-width: 550px){
            font-size: 0.85rem;
            line-height: 1rem
          }

          @media screen and (min-width: 375px) and  (max-width: 550px){
            font-size: 0.7rem;
            line-height: 1rem;
            margin-top: 1vh;
          }
    }

    > .btn-theme-disney {
        color: #fff;
        padding: 0.5rem 3tem;
        font-size: 17px;
        border-radius: 4px;
        text-align: center;
        margin-top: 2vh;
        display: inline-block;
        text-transform: uppercase;
        background-color: #0063e5;
        border: 1px solid transparent;
    }
`;

const ImageInfo = styled.div`
    width: 48%;
    flex: 0 auto;
    opacity: 1;
    z-index: 1500;
    position: relative;

    @media screen and (min-width: 991px) {
        width: 100%;
        padding: 0;
    }


    img {
        width: 100%;
        max-width: 600px;
        height: auto;

        @media screen and (min-width: 550px) and  (max-width: 1200px){
            height: auto;
            width: 100%;
            object-fit: container;
            margin-top: 3vh;
          }

          @media screen and (min-width: 280px) and  (max-width: 500px){
            height: 25vh;
            width: 100%;
            object-fit: container;
          }
}
    }
`;


export default NightWatch