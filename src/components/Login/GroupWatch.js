import React from 'react'
import styled from 'styled-components'

function GroupWatch() {
  return (
    <>
    <Section>
        <Container>
            <Content>
                <h1 className='disney-tittles'>Virtual Movie Nights with</h1>
                <h1 className='disney-tittles '>GroupWatch</h1>
                <li>Watch together, even when apart</li>
                <li>Stream with up to 6 friends</li>
                <li>Pause, rewind, react together</li>
                <li>Easy setup and Sharing</li>
            </Content>
        </Container>
    </Section>
    </>
  )
}

const Section = styled.section`
    background: url('https://drive.google.com/uc?id=19XdUjnqI9EoWPmYCmYFpXQWgwRA_Qnce')center/cover no-repeat;
    height: 71vh;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen (min-width: 768px) and  (max-width: 1200px){
        height: 61vh;
      }
    @media screen (min-width: 280px) and  (max-width: 768px){
        height: 55vh;
    }

`;

const Container = styled.div`
    width: 91%;
    margin: 0 auto;

    @media screen (min-width: 280px) and  (max-width: 991px){
        width: 85%;
    }
`;

const Content = styled.div`
    margin-top: 17vh;

    @media screen (min-width: 280px) and  (max-width: 1200px){
        margin-top: 13vh;
      }

    li{
        font-size: 1rem;
        font-weight: 300;

        @media screen (min-width: 280px) and  (max-width: 375px){
            font-size: 0.75rem;
        }
    }
`;

export default GroupWatch