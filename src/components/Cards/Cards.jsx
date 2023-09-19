import React from 'react'
import { cardData } from '../Data/Data'
import  './Cards.css'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
const Cards = () => {
  return (
    <div className='Limit'>
      {
        cardData.map((item, index) => (
            <div  key={index}>
              <h3>{item.Name}</h3>
               <p>{item.previousPrice}</p>
               <p>{item.Price}</p>
               <button>{item.button}</button>
               <hr/>
               <span>{item.desc}</span>
               <p><PersonOutlineRoundedIcon/>{item.icon}</p>
               <p><CloudUploadOutlinedIcon/></p>
               <p><MailOutlineOutlinedIcon/></p>
            </div>
        ))
      }
    </div>
  )
}

export default Cards


