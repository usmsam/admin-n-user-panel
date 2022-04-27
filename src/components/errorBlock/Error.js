import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Error = () => {
    const [visible ,setVisible] = useState(false)
    const state = useSelector(state => state.login)

    useEffect(( ) => {
        if(state.error){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }, [state])

    return (
        <div>
            {
                visible
                ?
                <p style={{padding:'5px', background: 'red' , borderRadius: '20px'}}>Ошибка... попробуйте еще !!!</p>
                :
                null

            }
        </div>
    )
}

export default Error