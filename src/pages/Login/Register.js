import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { createParent } from '../../host/Config'
import style from './Login.module.css'

export default class Register extends Component {
    register=()=>{
        return (document.getElementById('password').value===document.getElementById('confirmPassword').value) ? this.createParent() : console.log('error');
    }
    createParent=()=>{
        var firstname = document.getElementById('firstname').value
        var lastname = document.getElementById('lastname').value
        var username = document.getElementById('username').value
        var email = document.getElementById('email').value
        var password = document.getElementById('password').value
        var phone = document.getElementById('phone').value
        var description = document.getElementById('description').value
        var user = {
            first_name: firstname,
            last_name: lastname,
            username: username,
            email: email,
            password: password,
        }
        var parent = {
            user: user,
            phone: phone,
            description: description,
        }
        console.log(parent);
        let formData=new FormData()
        formData.append("user", user ?? "")
        formData.append("phone", phone ?? "")
        formData.append("description", description ?? "")
        createParent(formData)
    }
    render() {
        return (
            <div>
            <div className={style.container} >
                <div className={style.loginBox}>
                    <div style={{display: 'flex'}}>
                        <h2>Register</h2>
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
                            <input type='text' id="firstname" name='' required />
                            <label>Firstname</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='text' id="lastname" name='' required />
                            <label>Lastname</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='text' id="username" name='' required />
                            <label>Username</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='password' id="password" name='' required />
                            <label>Password</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='password' id="confirmPassword" name='' required />
                            <label>Confirm password</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='email' id="email" name='' required />
                            <label>Email</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='text' id="phone" name='' required />
                            <label>Phone</label>
                        </div>
                        <div className={style.userBox}>
                            <input type='text' id="description" name='' required />
                            <label>Description</label>
                        </div>
                        <a style={{color:'white'}} onClick={this.register}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
