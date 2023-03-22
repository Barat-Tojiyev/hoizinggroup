import styled from "styled-components";

import {ReactComponent as message} from '../../assets/icon/message.svg'
import {ReactComponent as what} from '../../assets/icon/what.svg'
import {ReactComponent as phone} from '../../assets/icon/phone.svg'
import {ReactComponent as location} from '../../assets/icon/location.svg'


const Container=styled.div`
margin-top: 96px;
width: 100%;
background: #F5F7FC;
height: 434px;
padding: 48px 0;

`
const Content=styled.div`
width: 100%;
max-width: 1440px;
padding: var(--padding);
margin: auto;
margin-top: 40px;
display: flex;
justify-content: space-between;
`
const Wrapper=styled.div`
display: flex;
flex-direction: column;
align-items:center;
`
const Icon=styled.div``

Icon.Message=styled(message)`
margin-bottom:24px;`
Icon.What=styled(what)`
margin-bottom:24px;`
Icon.Phone=styled(phone)`
margin-bottom:24px;`
Icon.Location=styled(location)`
margin-bottom:24px;`

export{Container,Content,Wrapper,Icon}