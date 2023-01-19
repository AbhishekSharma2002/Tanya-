import React from 'react'
import './login.css';


export default function Login() {
    return (
        <>
            <div className='login-box'>
                <h2>Login</h2>
                <form>
                    <div className='user-box'>
                        <input type='text' name='' required=''></input>
                        <label>UserName</label>
                    </div>
                    <div className='user-box'>
                        <input type='password' name='' required=''></input>
                        <label>Password</label>
                    </div>
                    <div className='buttom-form'>
                        <a id='submit' href='#' >submit</a>
                        <div id='register'>
                            Don't have an account ?
                            <a href='#'>Register</a>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
