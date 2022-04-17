import React, { useState } from 'react'

function Helper() {

    const [state, setState] = useState(true)
    return (
        <>

            {
                state ?

                    <div className='help'
                        onClick={() => { setState(false) }}
                    >
                        <p>login: qwerty12345</p>
                        <p>pass: 123456789</p>
                        ***нажмите чтобы убрать подсказку***
                    </div>
                    :
                    null
            }

        </>
    )
}

export default Helper