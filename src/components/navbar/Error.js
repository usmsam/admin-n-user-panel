import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Error = () => {
    const [visible ,setVisible] = useState(false)

    const a = useSelector(state => state.login)
    // const c = useSelector(state => state)
    // console.log(c);

    useEffect(( ) => {
        if(a.error){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    }, [a])


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