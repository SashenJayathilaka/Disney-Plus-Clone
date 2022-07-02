import React, { useEffect } from 'react';
import styled from 'styled-components';
import DISNEY_FOR_KIDS from './DISNEY_FOR_KIDS';
import ImgSlider from './ImgSlider'
import Movies from './Movies';
import New from './New';
import Originals from './Originals';
import Trending from './Trending';
import Viewers from './Viewers';
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from '../features/movie/movieSlice';



const Home = () => {

  const dispatch = useDispatch();

  let populars = [];
  let hollywoods = [];
  let newTos = [];
  let kidss = [];
  let originals = [];
  let treading = [];


  useEffect(() => {
    db.collection("Movies").onSnapshot((snapshot) => {
      //console.log(snapshot);
      snapshot.docs.map((doc) => {
        //console.log(doc.data().type);

        switch (doc.data().type) {
          case "popular":
            populars = [...populars, { id: doc.id, ...doc.data() }];
            break;
          case "hollywood":
            hollywoods = [...hollywoods, { id: doc.id, ...doc.data() }];
            break;

          case "newTo":
            newTos = [...newTos, { id: doc.id, ...doc.data() }];
            break;

          case "kidsTv":
            kidss = [...kidss, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            treading = [...treading, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }

        

      });

      //console.log(originals)

      dispatch( setMovies ({
        popular: populars,
        hollywood: hollywoods,
        newTo: newTos,
        kidsTV: kidss,
        original: originals,
        treading: treading,

      }))


    })
  }, [])


  return (

    <Container>
      <ImgSlider />
      <Viewers />
      <New />
      <Movies />
      <Trending />
      <Originals />
      
    </Container>
  )
}


const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 4% calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://drive.google.com/uc?id=1KGsWMXJz6S2Bj_tj3scTKvDMsO5i-wcJ") center center / cover 
    no-repeat;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

export default Home