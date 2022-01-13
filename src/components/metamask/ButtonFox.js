import React from 'react';
import logo from './fox.svg';
import styled from 'styled-components';

export default function ButtonFox ({onClick}) {
    return(
        <button className="metamask" onClick={onClick} >
            <ImageFox    src={logo} alt="logo"/>
        </button>
    )
};


const ImageFox = styled.img`
  width:30px;
  display:inline-block;


  -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
    & .disable{
        opacity: 0.5;
    }
  &:hover{
    cursor:pointer;
    transform: scale(1.2);

  }


`
