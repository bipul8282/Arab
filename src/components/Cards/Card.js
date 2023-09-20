import React from 'react';
import { Starter } from '../Data/Data';
import './Cards.css';
import DoneAllIcon from '@mui/icons-material/DoneAll';

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
              <DoneAllIcon />
              {item.tick}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
