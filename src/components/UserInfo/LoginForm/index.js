import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {closeLoginForm, login} from '../../../redux/actions'
import './loginForm.scss'

export default function LoginForm(){
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({});
    const change = ({target:{name='',value=''}={}}) => setFormData({...formData, [name]:value})
    const loginClickHolder = () => dispatch(login(formData))
    const cancelClickHolder = () => {
        setFormData({});
        dispatch(closeLoginForm());
        }
    return (
        <div className="login-form">
            <input name='login' type="text" placeholder="login" onChange={change}/>
            <input name='password' type="text" placeholder="password" onChange={change}/>
            <div className='button-holder'>
            <button onClick={loginClickHolder}>Login</button>
            <button onClick={cancelClickHolder}>Cancel</button>
            </div>
            
        </div>
    )
}