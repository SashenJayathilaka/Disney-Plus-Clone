import React from 'react'
import styled from 'styled-components'

import imageOne from './Images/TV.png'
import imageTwo from './Images/Laptop.png'
import imageThree from './Images/mobile.png'
import imageFour from './Images/XBOX.png'

function Devices() {

    const getDevice = [
        { imgSrc: imageOne, tittle: "Tv" },
        { imgSrc: imageTwo, tittle: "Computer" },
        { imgSrc: imageThree, tittle: "Mobile & Tablet" },
        { imgSrc: imageFour, tittle: "Game Consoles" }
    ]


    return (
        <>
            <Section>
                <Container>
                    <Tittle>
                        <h1 className='disney-tittles'>Available Stream on Your Favorite Devices</h1>
                    </Tittle>
                    <ImageGrid>

                        {
                            getDevice.map((img, index) => (
                                <Image key={index}><img src={img.imgSrc} alt={img.imgSrc} /><h2>{img.tittle}</h2></Image>
                            ))
                        }

                    </ImageGrid>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    padding: 3vh 0 0vh 0;
    position: relative;
`;

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;

const Tittle = styled.div`
    text-align: center;
    margin: 0 0 4vh 0;
`;

const ImageGrid = styled.div`
  display: grid;
  gap: 15px 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 991px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
`;


const Image = styled.div`
    width: 100%;
    padding: 0 0 0 0;
    text-align: center;
    border-radius: 4px;

    @media screen and (min-width: 280px) and  (max-width: 767px){
        width: 100%;
    }

    img {
        width: 100%;
        height: 115px;
        object-fit: contain;
      
        @media screen and (min-width: 768px) and  (max-width: 991px){
          height: 85px;
        }
      
        @media screen and (min-width: 550px) and  (max-width: 767px){
          height: 75px;
        }
      
        @media screen and (min-width: 280px) and  (max-width: 550px){
          height: 55px;
        }
    }

    h2 {
        font-weight: 500 !important;

        @media screen and (min-width: 280px) and  (max-width: 550px){
          font-size: 0.9rem;
        }
    }
`;

export default Devices