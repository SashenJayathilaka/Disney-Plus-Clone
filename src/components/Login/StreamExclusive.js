import React from 'react';
import styled from 'styled-components';


const Stream_Exclusive = () => {


  return (
    <>
      <Section>
        <Container>
          <Tittle>
            <h1 className='disney-tittles'>Disney+ has your favorite stories</h1>
            <p>An unprecedented collection of the world's most beloved movies and TV series.</p>
          </Tittle>
          <GridImg>
          <Image ><img src='https://drive.google.com/uc?id=1nVl9d8GCfDhFzIu-G4H9DiEoCTJbfpH7' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1Ko0laxDg7WAbg8MURgnDn18Xfbt_npz4' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1KdxEsAaMz9MWbxsRlIwXM_qufH3vW3-C' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1GG_-jlrHMkCv5ua0UkgPo5ryMsJDuSBb' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1KivzxUfsyGpBjtzC-r8LeAt8Q3essPvw' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1m1LOLa29JER4o_qgRe-Uh7PE18hHTLJ-' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1KlLNjH6qCH9a3vUz2xx6iboX78gd_Iac' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1FU2tUlM-Lm_9GvGFaB4ubvuMRKSWSVhI' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1KjodMaJRBwE_fWiAap3ziR98KLkswtdi' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1-_K_Ilf0hhenIYp5PUygrvVUPR8i8Red' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1c5b87s40Ol_VJHykk4KGAYvVB_hzseU5' alt='grid/img' /></Image>
          <Image ><img src='https://drive.google.com/uc?id=1KqAs4Ike2s6GoBZw5z-6frFq7Dc1_OxF' alt='grid/img' /></Image>
          </GridImg>
        </Container>
      </Section>
    </>
  )
}

const Section = styled.section`
  padding: 5vh 0;
  position: relative;
  padding-bottom: 5%;

`;

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const Tittle = styled.div`
  text-align: center;
  margin-bottom: 3vh;

  p{
    font-size: 1ream;

    @media screen and (min-width: 550px){
      font-size: .8ream;
  }
  }
`;

const GridImg = styled.div`
  display: grid;
  gap: 15px 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 991px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
`;

const Image = styled.div`

  width: 100%;
  padding: 0;
  border-radius: 0.24rem;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 /73%) 0px 16px 10px -10px;


  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.24rem;
  }


`;


export default Stream_Exclusive