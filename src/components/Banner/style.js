import styled from "styled-components";

const Container=styled.div`
max-height: 571px;
position: relative;
width: 100%;
margin-top: 100px;
`
const Blur =styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
background-color: rgba(0,0,0,0.5);
`
const Content=styled.div`
position: absolute;
top:0;
left:0;
right:0;
bottom:0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #fff;
`
Content.Title=styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 36px;
text-align: center;
letter-spacing: -0.02em;
color: #FFFFFF;
max-width: 566px;
width: 100%;
`




const Image=styled.img`
  width:100%;
 height:571px;`
export{Container,  Image, Blur, Content}