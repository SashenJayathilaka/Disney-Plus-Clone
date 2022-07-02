import React from 'react'
import styled from 'styled-components'
import Advertisement from './Login/Advertisement'
import Banner from './Login/Banner'
import Devices from './Login/Devices'
import DownloadedNow from './Login/DownloadedNow'
// import Entertainment from './Login/Entertainment'
import Footer from './Login/Footer'
import NightWatch from './Login/NightWatch'
// import GroupWatch from './Login/GroupWatch'
import Stream from './Login/Stream'
import StreamExclusive from './Login/StreamExclusive'

function Login() {
  return (
    <>
    <Main>
    <Banner />
    <DownArrow src='https://drive.google.com/uc?id=1OP77i_qxRS1F5iOnaFqLbcYa4dP0lTVX' />
    <DownloadedNow />
    <NightWatch />
    <StreamExclusive />
    <Stream />
    <Advertisement />
    <Devices />
    <Footer />
    </Main>
    </>
  )
}

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;


const DownArrow = styled.img`
  display: flex;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
  padding-left: 50%;
`;

export default Login