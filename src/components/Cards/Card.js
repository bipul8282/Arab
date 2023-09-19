import React from 'react';
import { Starter } from '../Data/Data';
import './Cards.css';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Card = () => {
  return (
    <div className='card'>
      {Starter.map((item, index) => (
        <div className='btn' key={index}>
          <div>
            <h3>{item.Name}</h3>
            <p style={{ textDecoration: 'line-through' }}>{item.previousPrice}</p>
            <p>{item.Price}</p>
            <button style={{ backgroundColor: 'lightgreen' }}>{item.button}</button>
          </div>
          <div>
            <span>{item.desc}</span>
            <p>
              <PersonOutlineRoundedIcon />
              {item.icon}
            </p>
            <p>
              <CloudUploadOutlinedIcon />
            </p>
            <p>
              <MailOutlineOutlinedIcon />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
