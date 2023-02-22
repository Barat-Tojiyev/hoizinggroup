
import React from 'react'
import { Container, Content, Image, Swagger,Line } from './style'
import noImg from '../../assets/img/noimg.jpg'



export const HouseCard = ({ url, title, info,bath,bed ,garage,ruler }) => {



  return (
    <Container>
      <Image src={url || noImg} alt='#' />
      <Content>
        <div className="subTitle">{title || 'New Apartment Nice Wiew'}</div>
        <div className="info">{info || 'Quincy St, Brooklyn, NY, USA'}</div>
        <Swagger>
          <Swagger.Item>
            <Swagger.Bath />
            <div className="info">{bath|| 0} bath</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Bed />
            <div className="info">{bed || 0} bed</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Car />
            <div className="info">{garage|| 0} garage</div>
          </Swagger.Item>
          <Swagger.Item>
            <Swagger.Ruler />
            <div className="info">{ruler || 0} Sq Ft</div>
          </Swagger.Item>
        </Swagger>
      </Content>
      <Line/>
      <Content>
        <Swagger footer>
          <Swagger.Item>
           <div className="info">$2,800/mo</div>
           <div className="subTitle">$7,500/mo</div>
          </Swagger.Item>
          <Swagger.Item footer  >
          <Swagger.Resize/>
          <Swagger.Love/>
          </Swagger.Item>

        </Swagger>
        
      </Content>
    </Container>
  )
}
export default HouseCard
