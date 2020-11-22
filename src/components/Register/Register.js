import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../fakeData/logos/Group 1329.png'


const Register = () => {
    return (
        <div>
            <Link to="/home" >
                <img style={{ margin: "0px 0px 0px 600px", width: "300px" }} className="icon" src={icon} alt="" />
            </Link>
            <div style={{ backgroundColor: "white", margin: "120px 400px 0px 400px" }} className="loginPage-form login">
                <h3 style={{ textAlign: "center", margin: "10px" }}>Register as Volunteer</h3>

                <form >
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" name="Full Name" />
                    </div>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Username or Email" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="Date" name="date" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Description" name="description" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Organize books at the library" name="library" />
                    </div>




                    <Link to="/details" style={{ backgroundColor: "#3F90FC", color: "white" }} type="submit" className="btn btn-warning loginPage-primary btn-block">
                        Registration
				</Link>
                </form>


            </div>
        </div>
    );
};

export default Register;