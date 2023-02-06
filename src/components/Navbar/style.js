import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg} from '../../assets/icon/logo1.svg'

export const Container=styled.div`
`
export const Wrapper=styled.div`
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
padding:0 30px;`