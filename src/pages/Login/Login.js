import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import style from './Login.module.css'

export default class Login extends Component {
   state={
       type:""
   }
   
    login=()=>{
   var username=document.getElementById('username').value
    var password=document.getElementById('password').value

    if(password==='parent' && username==='parent'){
        this.setState({ 
            type:"parent"
        })
            }
            
    if(password==='teacher' && username==='teacher'){
        this.setState({ 
            type:"teacher"
        })
            }
   }
    render() {
        return (
            <div>
                {
                    this.state.type==='parent'?<Redirect to="/cabinet/parents"/>:
                    this.state.type==='teacher'?<Redirect to="/cabinet/teacher/bolim"/>:
            <div className={style.container} >
                <div className={style.loginBox}>
                    <div style={{display: 'flex'}}>
                        <h2>Login</h2>
                        <Link to='/uz'>
                            <div className={style.mdiv}>
                                <div className={style.div}>
                                    <div className={style.md}></div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <form>
                        <div className={style.userBox}>
                            <input type='text' id="username" name='' required />
                            <label>Username</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='password' id="password" name='' required />
                            <label>Password</label>
                        </div>
                        <a style={{color:'white'}} onClick={this.login}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>
                }            </div>
        )
    }
}
