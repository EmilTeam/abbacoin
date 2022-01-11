import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components'
import { SiBinance } from 'react-icons/si';
import favicon from "../../assets/favicon/favicon.ico"


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
    <>

      {loading ? "..."
      :
      <CardToken>

        <p className="tc-white token-name"> <img src={ favicon }/> <strong>{token.name}</strong> <span>({token.symbol})</span> </p>
        <div className="token-price">
          <h3 className="h3 tc-white"> $ {tokenvalue}</h3>
          <p className="bnb-card tiny tc-white">  { bnbvalue } <SiBinance className="icon_bnb" /> <b> BNB</b></p>
        </div>



      </CardToken>}


    </>
  );
};

export default Axios;

const CardToken = styled.div`
background-color:#1a1b1c;
padding:12px 32px;
border-radius:5px;
display:inline-block;
margin-top:15px;

& .token-name{
  display:flex;
  align-items:center;
  margin-bottom:0;
  & img{
    display:inline-block
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