import React from "react"
import './photos.css'

import piscina from './piscina2.jpg'
import hotel2 from './quarto1.jpg'
import hotel3 from './quarto2.jpg'
import hotel4 from './churrasqueira.jpg'
import hotel5 from './sala.jpg'

const HotelPhotos = () => {
  let data = [
    {
      id: 1,
      imgSrc: piscina
    },
    {
      id: 2,
      imgSrc: hotel2
    },
    {
      id: 3,
      imgSrc: hotel3
    },
    {
      id: 4,
      imgSrc: hotel4
    },
    {
      id: 5,
      imgSrc: hotel5
    },
  ]

  return(
      <>
        <div className="gallery">
          {data.map((item, index)=>{
            return(
                <div className="pics" id={item.id}>
                  <img src={item.imgSrc} style={{width: '100%'}}/>
                </div>
            )
          })}
        </div>
      </>
  )
}

export default HotelPhotos;