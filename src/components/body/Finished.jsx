import React, { useContext } from 'react';
import { Context } from '../context/contect';

function Finished() {
  const { data } = useContext(Context);
  let filtered = data.filter(item => {
    return item.checked
  })
  return (
    <div className='body'>
       <p id='p'>Выполненные задания</p>
      {filtered.length > 0 ?
        filtered.map(item => {
          return (
            <li className='list' key={item.id}>
              <input
                className='inp' type="checkbox"
                checked={item.checked ? 'checked' : ''}
              
              />
              <p style={{ textDecoration: item.checked ? 'line-through' : '' }}>
                {item.id}.{item.title}
              </p>
              <span className='spanFlex'>
              </span>
            </li>
          )
        })
        :
        <p className='perror'>Нет выполненных заданий</p>
      }

    </div>
  )
}

export default Finished