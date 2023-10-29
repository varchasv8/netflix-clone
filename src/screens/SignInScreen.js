import React, {useRef} from 'react';
import "./LoginScreen.css";
import { auth } from '../firebase';
// import { auth } from '../firebase';


function SignInScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })
    };

  return (
    <div class="formm">
            <form>
                <h1>Sign In</h1>
                <div class="info">
                    <input class="email" type="email" placeholder="Email or phone number" ref={emailRef}/> <br/>
                    <input class="email" type="password" placeholder="Password" ref={passwordRef}/>
                </div>
                <div class="btn">
                    <button class="btn-primary" type="submit" onClick={signIn}>Sign In</button>
                </div>
                <div class="help">
                    <div>
                        <input value="true" type="checkbox"/><label>Remember me</label>
                    </div>

                    <h4>
                        <span className="SignupScreen__help">New to Netflix? </span>
                        <span className="SignupScreen__link" onClick={register} >Sign Up now.</span>
                        <br/>
                        <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
                    </h4>
                </div>

            </form>
    
    </div>
  )
}

export default SignInScreen