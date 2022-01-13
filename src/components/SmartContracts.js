import React, { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import MetaMask from "./metamask";


import {BiCopy} from 'react-icons/bi';
//import { SiBinance } from 'react-icons/si';
import styled from 'styled-components'

export default function SmartContracts() {


    const [copied, setCopied] = useState(false)
    const contract = "0x1b2f67679798c764f2c0c69dfb6bda8b30a094cf"

    return(
        <>
        <CardSmart>
                <Input
                    type="text"
                    id="contract"
                    value={contract} readOnly="readOnly"
                />

                 <CopyToClipboard className="copyclipboard" text={contract}>
                     <button onClick={()=> setCopied(true)} className="copy " > <BiCopy/></button>
                 </CopyToClipboard>

                <MetaMask/>





        </CardSmart >
        {copied && <CopiedCard>✓ Copied</CopiedCard>}
        </>
    )
};

const Input = styled.input`
padding:10px 10px;
display:block;
width:100%;
border-radius:5px;
border:solid 1px #eee;

`

const CopiedCard = styled.div`
padding:10px 10px;
margin-top:4px;
background:rgba(204, 232, 204,.2);
display:block;
width:100%;
border-radius:5px;
color:#CCE8CC;
border:solid 1px rgba(204, 232, 204,.2);

`


const CardSmart = styled.div`

display:flex;

margin-top:15px;

& button{
    background:#eeee;

    padding:10px 15px;
    border-radius:5px;
    border:none;
}
`