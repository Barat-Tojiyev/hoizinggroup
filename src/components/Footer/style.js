import styled from "styled-components";
import {GoLocation }  from 'react-icons/go' 
import {BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import {ReactComponent as facebook } from "../../assets/icon/facebook.svg";
import {ReactComponent as twitter } from "../../assets/icon/twitter.svg";
import {ReactComponent as instagram } from "../../assets/icon/instagram.svg";
import {ReactComponent as linkiden } from "../../assets/icon/linkiden.svg";
import {ReactComponent as logo } from "../../assets/icon/logo1.svg";
import {ReactComponent as top } from "../../assets/icon/top.svg";



const Container=styled.div`
margin-top: 96px;
width: 100%;
background: #0D263B;
height: 510px;
padding: 48px 0;

`
const Content=styled.div`
display: flex;
justify-content: space-between;

padding: var(--padding);
max-width: 1440px;
width: 100%;
margin: 0 auto;

`

const Wrapper=styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 295px;

`
Wrapper.Title=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
display: flex;
align-items: center;

color: #FFFFFF;`

Wrapper.Item=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
display: flex;
align-items: center;
`

const Icon=styled.div`
height:36px;
width:36px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 3px;

:hover{
    background:rgba(255,255,255,0.1) ;
    cursor: pointer;
}

`

Icon.Location=styled(GoLocation)`
margin-right: 20px;
font-size: 30px;
`

Icon.Phone=styled(BsTelephone)`
margin-right: 20px;
font-size: 20px;
`
Icon.Mail=styled(FiMail)`
margin-right: 20px;
font-size: 20px;
`
Icon.Facebook=styled(facebook)`
font-size:16px ;

`
Icon.Twitter=styled(twitter)`
font-size:16px;
`
Icon.Instagram=styled(instagram)`
font-size:16px;
`
Icon.Linkiden=styled(linkiden)`
font-size:16px;
`
Icon.Top=styled(top)`
font-size:16px;
`
Icon.Logo=styled(logo)`
font-size:16px;
margin-right: 10px;
`
const HR=styled.hr`
margin: 10px 0;
`
export{Container,Wrapper,Icon,Content,HR}