import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'
import { SiBinance } from 'react-icons/si';
import favicon from "../../assets/favicon/favicon.ico"
import SmartContracts from "../SmartContracts";

const Axios = () => {
  const [token, setToken] = useState([]);

  const [loading, setLoading] = useState(true);

  const tokenId = "0xe0ed96187ad3bB862E6616Cb7Cf04ba541309F5e";

  useEffect(() => {
    axios.get(`https://api.pancakeswap.info/api/v2/tokens/${tokenId}`).then(res => {
      const token = res.data;
      setToken(token.data);
      setLoading(false);
    });
  }, []);


let tokenvalue = parseFloat(token.price).toFixed(2);
let bnbvalue = parseFloat(token.price_BNB).toFixed(6);

  return (
      <CardToken>
        {loading
        ?
        <>
          <h5 className="h5 tc-white"> Loading ...</h5>
        </>
        :
        <>
        <a href="https://bscscan.com/token/0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf" target="blank">
          <p className="tc-white token-name"> <img src={ favicon }/> <strong>{token.name}</strong> <span>({token.symbol})</span> </p>
        </a>
          <div className="token-price">
            <h3 className="h2 tc-white"> $ {tokenvalue}</h3>
            <p className="bnb-card tiny tc-white">  { bnbvalue } <SiBinance className="icon_bnb" /> <b> BNB</b></p>
          </div>

          <SmartContracts/>
        </>
        }

      </CardToken>
  );
};

export default Axios;

const CardToken = styled.div`
background:#1a1b1c;
padding:24px 32px;
border-radius:5px;

margin-top:24px;

& .token-name{
  display:flex;
  align-items:center;
  margin-bottom:0;
  & img{
    display:inline-block;
    margin-right: 15px;
    height:20px;
    width:20px;

  }
}

& .token-price{
  display:flex;
  align-items:center;
}


.bnb-card{
  display:flex;
  align-items:center;
  padding: 5px;
  background:#252526;
  border-radius:5px;
  margin: 0 10px;
}

& .icon_bnb{
  fill:#f3ba2f;
  margin :0 5px;
}
`