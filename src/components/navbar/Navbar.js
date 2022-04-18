import React from 'react'
import { Link } from 'react-router-dom'
import Sam from './sam.png'
import Popup from './Popup';
import { useSelector, useDispatch } from 'react-redux'


const Navbar = () => {
  const dispatch = useDispatch()
  const popup = useSelector(state => state.popup)
  const login = useSelector(state => state.login.loggined)
  // console.log(login);


  return (
    <div className='navbar'>
      <Link to='/'><img src={Sam} className='navbarlogo' alt='logo'/></Link>
      <div className='buttons'>
        <button
          className='news'
        >
          <Link to='/news'>Новости</Link>
        </button>


        {login !== true ?
          < button
            className='sign vhod'
            onClick={() => dispatch({ type: 'TOGGLE_POPUP' })}
          >
            Вход
          </button>
          :
          <button
            className='sign '
            onClick={() => dispatch({ type: 'LOGOUT' })}
          >
            Выход
          </button>
        }

      </div>


      {
        login === false ?
          popup.status ?
            <Popup />
            :
            null
          :
          null
      }

      {

      }
    </div >
  )
}

export default Navbar