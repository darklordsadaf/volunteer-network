import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import icon from '../fakeData/logos/Group 1329.png'
import googleIcon from "../fakeData/logos/google.png"
import { UserContext } from '../../App';


firebase.initializeApp(firebaseConfig);
const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {


            const { displayName, email } = result.user;
            const newUser = {
                isSignedIn: true,
                email: email,
                name: displayName,
            };

            setLoggedInUser(newUser);
            history.replace(from);

        }).catch(function (error) {
            console.log(error)

        });



    };




    return (
        <div>
            <Link to="/home" >
                <img style={{ margin: "0px 0px 0px 600px", width: "300px" }} className="icon" src={icon} alt="" />
            </Link>

            <div style={{ backgroundColor: "white", border: "1px solid lightGray", padding: "100px", margin: "30px 90px 30px 70px" }} >
                <h3 style={{ margin: "0px 0px 100px 500px" }} >Login with</h3>


                <button onClick={handleGoogleSignIn} style={{ margin: "0px 0px 80px 450px", padding: "0x 100px 0px 100px", borderRadius: "20px", backgroundColor: 'white', color: "black" }} className="btn btn-secondary" >
                    <span>
                        <img src={googleIcon} style={{ maxWidth: "32px" }} alt="google logo" />
                    </span>
                    <span style={{ margin: "0px 0px 0px 20px" }}>Continue with Google</span>
                </button>


                <div style={{ margin: "0px 0px 0px 420px" }} className="register-login">
                    Don’t have an account?{" "}
                    <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" className="btn btn-logintoggle" >
                        Create an account
				</a>
                </div>
            </div>
        </div>
    );
};


export default Login;