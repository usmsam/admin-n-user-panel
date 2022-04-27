import React, {useState} from 'react'

import { useDispatch } from 'react-redux'
import { loginAction } from '../actions/actions'
import Error from '../errorBlock/Error'

const Popup = () => {
    const dispatch = useDispatch()
    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    return (
        <div className='popup'>
            <Error />

            <input
                placeholder='login...'
                value={loginText}
                onChange={(e) => setLoginText(e.target.value)}
            />
            <input
                placeholder='Password...'
                value={passwordText}
                onChange={(e) => setPasswordText(e.target.value)}

            />

            <button
                onClick={() => dispatch(loginAction(loginText, passwordText))}
            >
                Sign in
            </button>

        </div >
    )
}

export default Popup