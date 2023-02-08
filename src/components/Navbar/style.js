import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg} from '../../assets/icon/logo1.svg'

export const Container=styled.div`
/* 
display: flex;
flex-direction:column;
align-items: center; */

`
export const Wrapper=styled.div`
/* max-width: 1440px; */
background:var(--colorPrimary);
color:#fff;
padding:var(--padding);
height: 64px;
font-size: 16px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Section=styled.div`
display: flex;
align-items: center;
cursor: ${({logo})=>logo&&'pointer'};
.active{
    color: red;
}
`
export  const Logo =styled(logoImg)`
width: 30px;
margin-right: 10px;
& path{
    fill: #fff;
    stroke: #fff;
}
`
export const Link=styled(NavLink)`
text-decoration:none;
color:#ffff;
padding:0 30px;

`