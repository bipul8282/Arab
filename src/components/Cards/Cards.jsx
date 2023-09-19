import React from 'react';
import { cardData } from '../Data/Data';
import './Cards.css';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Cards = () => {
  return (
    <div className='Limit'>
      {cardData.map((item, index) => (
        <div key={index} className='card-item'>
          <h3>{item.Name}</h3>
          <p style={{ textDecoration: 'line-through' }}>{item.previousPrice}</p>
          <p>{item.Price}</p>
          <button style={{ backgroundColor: 'lightgreen' }}>{item.button}</button>
          <hr />
          <span>{item.desc}</span>
          <p>
            <PersonOutlineRoundedIcon />
            {item.icon}
          </p>
          <p>
            <CloudUploadOutlinedIcon />
            {item.Storage}
          </p>
          <p>
            <MailOutlineOutlinedIcon />
            {item.email}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
