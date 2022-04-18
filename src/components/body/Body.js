import React, { useRef  } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Body = () => {

  const state = useSelector(state => state)
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()
  const ref = useRef()
  const ref2 = useRef()
  const daaa = state.com.filter((item) => {
      if(!login.loggined){
        return item.verify
      }else{
        return item
      }
  })
  function addComment() {
    dispatch({ id: state.com.length + 1, type: 'ADD', payload: { title: ref.current.value, text: ref2.current.value } })
    ref.current.value = null
    ref2.current.value = null
  }
  function verifyComment(id) {
    dispatch({ type: "VERIFY", payload: id })
  }
  return (
    <>
      <>
        {
          login.loggined
            ?
            <>
              <input ref={ref} type="text" />
              <input ref={ref2} type="text" />
              <button onClick={() => addComment()}> Add</button>
            </>
            :
            null

        }
        {
          daaa.map((item) => {
            return <div key={item.text} className='commentItem'>
              <h3>{item.id}. {item.title}</h3>
              <p>{item.text}  {item.date}</p>
              {item.verify ?
                <span id='commentStatus' className='colored'></span>
                :
                <span id='commentStatus' ></span>

              }

              {
                login.admin ?
                  <button
                    onClick={() => {
                      verifyComment(item.id)
                    }}
                  >
                    Одобрить
                  </button>
                  :
                  ''
              }
            </div>
          })
        }



      </>

    </>
  )
}

export default Body