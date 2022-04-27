import React from 'react'
import { Link } from 'react-router-dom'
import Sam from './sam.png'
import Popup from '../popup/Popup';
import { useSelector, useDispatch } from 'react-redux'
import { togglePopupAction, logoutAction } from '../actions/actions';

const Navbar = () => {
  const dispatch = useDispatch()
  const { login, popup } = useSelector(state => state)

  return (
    <div className='navbar'>
      <Link to='/'><img src={Sam} className='navbarlogo' alt='logo' /></Link>

      <div className='buttons'>

        <button className='news'>
          <Link to='/news'>Новости</Link>
        </button>


        {login.logined !== true ?
          <button
            className='sign vhod'
            onClick={() => dispatch(togglePopupAction())}
          >
            Вход
          </button>

          :

          <button
            className='sign '
            onClick={() => dispatch(logoutAction())}
          >
            Выход
          </button>
        }

      </div>




      {
        /* =============   popup  ================= */
        login.logined === false ?
          popup.status ?
            <Popup />
            :
            null
          :
          null
        /* =============   popup END  ================= */
      }
    </div >
  )
}

export default Navbar