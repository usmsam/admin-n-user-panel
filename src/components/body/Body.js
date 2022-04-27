import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addCommentAction, verifyCommentAction, verifyClearAction } from '../actions/actions'

const Body = () => {
  /* State from store Redux */
  const state = useSelector(state => state)
  /*=======================================*/

  const dispatch = useDispatch()

  const [loginText, setLoginText] = useState('')
  const [passwordText, setPasswordText] = useState('')


  const dataList = state.comment.filter((item) => {
    if (!state.login.logined) {
      return item.verify
    } else {
      return item
    }
  })






  return (
    <Fragment>
      {
        state.login.logined
          ?
          <Fragment>
            <input value={loginText} type="text" onChange={(e) => setLoginText(e.target.value)} />
            <input value={passwordText} type="text" onChange={(e) => setPasswordText(e.target.value)} />
            <button onClick={() => {
              dispatch(addCommentAction(loginText, passwordText))
              setLoginText('')
              setPasswordText('')
            }
            }>Add</button>
          </Fragment>
          :
          null

      }
      {
        dataList.length > 0 ?
          dataList.map((item) => {
            return <div key={item.text} className='commentItem'>
              <h3>{item.id}. {item.title}</h3>
              <p>{item.text}  {item.date}</p>
              {item.verify ?
                <span id='commentStatus' className='colored'></span>
                :
                <span id='commentStatus' ></span>

              }

              {
                state.login.admin ?
                  !item.verify ?
                    <button
                      onClick={() => {
                        dispatch(verifyCommentAction(item.id))
                      }}
                    >
                      Одобрить
                    </button>
                    :
                    <button
                      onClick={() => {
                        dispatch(verifyClearAction(item.id))
                      }}
                    >
                      Вернуть
                    </button>
                  :
                  null
              }
            </div>
          })
          :
          <center><h1>No comments</h1></center>
      }
    </Fragment>

  )
}

export default Body