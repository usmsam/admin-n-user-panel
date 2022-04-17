import React from 'react'
import { login } from '../../store/reducers/loginReducer'
import { useSelector } from 'react-redux';


const Home = () => {
  const a = useSelector(state => state.login);



  return (
    <div style={{ fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>


      {
        a.loggined
          ?
          `Привет ${login}`
          :
          'Привет вы Гость в дaнный момент , авторизуйтесь !!!'
      }
    </div>
  )
}

export default Home