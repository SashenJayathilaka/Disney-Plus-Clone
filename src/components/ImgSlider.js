import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <Carousel {...settings}>
            <Warp>
                <img src='https://drive.google.com/uc?id=14JFjPPTUK39SpIN77dCBtp4NFQENdred' alt='' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=10DSo570bbNPM_2agrvUF9orWZNwU5lnF' alt='' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=13rLpwEabENq8k1EDD8onOvoNuDD2Le2x' alt='' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=1s500-iTeYkpb1LUBj1W23aAL0fcmHJDp' alt='' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=1dXN1Zedwtg_Sy_MsIjdSRHXTWfF8u8dB' alt='' />
            </Warp>
            <Warp>
                <img src='https://drive.google.com/uc?id=1Vl-dpwmWcV_eNyPHRIivRJMw_OUy28kE' alt='' />
            </Warp>

        </Carousel>
    )
}

export default ImgSlider


const Carousel = styled(Slider)`
    cursor: pointer;
    margin-top: 20px;

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(158, 158, 171);
        }
    }

    li.slick-active button:before{
        color: white;
    }
    .slick-list {
        overflow: visible;
    }
    button {
        z-index: 1;
    }
`

const Warp = styled.div`

    img{
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgba(0 0 0 /69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;

        &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`