import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
export const LoginScreen = ({history}) => {
  const {dispatch} = useContext(AuthContext)
  const lastPath = localStorage.getItem('lastPath') || '/'
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: 'Alejo'
      }
    })
    history.replace(lastPath)
  }
  return (
    <div>
      <h1>Login</h1>
      <hr></hr>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  )
}
