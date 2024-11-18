import React from "react"
import './photos.css'

import eline1 from '../../photos/eline1.jpeg'
import eline2 from '../../photos/eline2.jpeg'
import eline3 from '../../photos/eline3.jpeg'
import eline4 from '../../photos/eline4.jpeg'

const Photos = () => {
  let data = [
    {
      id: 1,
      imgSrc: eline1
    },
    {
      id: 2,
      imgSrc: eline2
    },
    {
      id: 3,
      imgSrc: eline3
    },
    {
      id: 4,
      imgSrc: eline4
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

export default Photos;