import React from "react"
import './clima.css'

import quarta from './quarta.jpeg'
import quinta from './quinta.jpeg'
import sexta from './sexta.jpeg'
import sab from './sabado.jpeg'
import dom from './domingo.jpeg'

const Climaconfig = () => {
  let data = [
    {
      id: 24,
      imgSrc: quarta,
    },
    {
      id: 25,
      imgSrc: quinta
    },
    {
      id: 26,
      imgSrc: sexta
    },
    {
      id: 27,
      imgSrc: sab
    },
    {
      id: 28,
      imgSrc: dom
    },
  ]

  return(
      <>
        <div className="clima">
        <h3> Parece que na maior parte dos dias vamos enfrentar uma chuva.</h3>
        <p>O pior dia de chuva parece ser sexta.</p>
        <p>Os demais pode ser que ocorra uma pancada de chuva ao longo do dia.</p>
        <p>Mas de qualquer forma, passaremos por temperaturas mais amenas.</p>
          {data.map((item, index)=>{
            return(
                <div className="pics" id={item.id}>
                  <img src={item.imgSrc} style={{width: '50%'}}/>
                </div>
            )
          })}
        </div>
      </>
  )
}

export default Climaconfig;