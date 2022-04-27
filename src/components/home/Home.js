import React from 'react'
import { login } from '../../store/reducers/loginReducer'
import { useSelector } from 'react-redux';


const Home = () => {
  
  const state = useSelector(state => state.login);
  return (
    <div style={{ fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {
        state.admin
          ?
          'Привет admin'
          :
          state.logined ?
            `Привет ${login}`
            :
            'Привет Гость, авторизуйтесь !!!'
      }
    </div>
  )
}

export default Home