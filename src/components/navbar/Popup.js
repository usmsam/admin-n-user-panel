import React, { useEffect, useRef } from 'react'

import {useSelector, useDispatch } from 'react-redux'
import Error from './Error'

const Popup = () => {

    
    const isLoggined = useSelector(state => state.login)
  
    const dispatch = useDispatch()
    const ref = useRef()
    const ref2 = useRef()


    return (
        <div className='popup'>

            <Error/>
            <input ref={ref} type='text' placeholder='login..'></input>
            <input ref={ref2} type='text' placeholder='Password..'></input>
            <button
                onClick={() => {
                    dispatch({
                        type: 'LOGIN', payload: {login:ref.current.value, pass:ref2.current.value}
                    })
                }}
            >Sign in</button>
            
        </div>
    )
}

export default Popup