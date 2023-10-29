import React, { useState } from 'react'
import "./LoginScreen.css"
import SignInScreen from './SignInScreen';
function LoginScreen() {

    const [signIn, setSignIn] = useState(false);


  return (
    <div className="LoginScreen">
        <div className="loginScreen__background">
            <img
                className='loginScreen__logo'
                src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
                alt='Login Background'
            />
            <button
                onClick={() => setSignIn(true)} 
                className='loginScreen__btn'>
                Sign In
            </button>

            <div className="loginScreen__gradient">

            </div>
            
            <div className="loginScreen__body">
                {signIn? (
                    <SignInScreen/>
                ): (
                    <div className="GetStarted__body">
                        <h1>Unlimited films, TV programmes and more.</h1>
                        <h2>Watch Anywhere. Cancel at any time.</h2>
                        <h3>Ready to Watch? Enter your email to create or restart your membership.</h3>

                        <div className="LoginScreen__input">
                            <form>
                                <input className="email" type="email" placeholder="Email address"/>
                                <button
                                    onClick={() => setSignIn(true)} 
                                    className="GetStarted__button" type="submit">GET STARTED</button>
                            </form>
                        </div>
                    </div>
                    
                )}
                
            </div>
            
        </div>
    </div>
  )
}

export default LoginScreen