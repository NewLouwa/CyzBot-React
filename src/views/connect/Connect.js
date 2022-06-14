import React, {useContext} from 'react';
import "../../sass/Layout/_Connect.scss";
import {ThemeContext} from '../../context/ThemeContext';


export default function Connect() {
    const {theme} =useContext(ThemeContext);
  return (
    <div className={"SignUp__Page --"+theme}>
        <div className='signUp__container'>
            <h3>Sign UP</h3>
            <form className='signUp__form'>
                <input type='text' placeholder='First Name'/><br></br>
                <input type='text' placeholder='Last Name'/><br></br>
                <input type='text' placeholder='Email'/><br></br>
                <input type='text' placeholder='Password'/><br></br>
                <input type='text' placeholder='Confirm Password'/><br></br>
                <button>Sign Up</button>
            </form>
        </div>
        <div className='signIn__container'>
            <h3>Sign IN</h3>
            <form className='signIn__form'>
                <input type='text' placeholder='Email'/><br></br>
                <input type='text' placeholder='Password'/><br></br>
                <button>Sign In</button>
            </form>
        </div>
    </div>
  )
}
