import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import icon from '../fakeData/logos/Group 1329.png'


const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/details" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const onSubmit = (e) => {

        fetch("http://localhost:5000/addTask", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(e)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.replace(from);
                }
            })
    }

    const taskName = sessionStorage.getItem('token')
    return (
        <div>
            <Link to="/home" >
                <img style={{ margin: "0px 0px 0px 600px", width: "300px" }} className="icon" src={icon} alt="" />
            </Link>
            <div style={{ backgroundColor: "white", margin: "120px 400px 0px 400px" }} className="loginPage-form login">
                <h3 style={{ textAlign: "center", margin: "10px" }}>Register as Volunteer</h3>

                < form className="ship-form" onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-group">
                        < input defaultValue={loggedInUser.name} ref={register({ required: true })} className="form-control" placeholder="Full Name" name="name" />
                    </div>

                    <div className="form-group">
                        < input defaultValue={loggedInUser.email} ref={register({ required: true })} className="form-control" placeholder="Username or Email" name="email" />
                    </div>

                    <div className="form-group">
                        <input type="date" className="form-control" ref={register({ required: true })} placeholder="Date" name="date" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" ref={register({ required: true })} placeholder="Description" name="description" />
                    </div>

                    <div className="form-group">
                        <input type="text" defaultValue={taskName} ref={register({ required: true })} className="form-control" placeholder="Organize books at the library" name="library" />
                    </div>

                    <input to="/details" className="btn btn-warning loginPage-primary btn-block" style={{ backgroundColor: "#3F90FC", color: "white" }} type="submit" />
                </form >

                {/* <form className="ship-form" onSubmit={handleSubmit(onSubmit)}  >
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.name} className="form-control" placeholder="Full Name" name="Full Name" />
                    </div>

                    <div className="form-group">
                        <input type="email" defaultValue={loggedInUser.email} className="form-control" placeholder="Username or Email" name="email" />
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="Date" name="date" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Description" name="description" />
                    </div>
                    <div className="form-group">
                        <input type="text" defaultValue={loggedInUser.taskName} className="form-control" placeholder="Organize books at the library" name="library" />
                    </div>

                    <button type="submit" >submit</button>
                    {/* <Link to="/details" style={{ backgroundColor: "#3F90FC", color: "white" }} type="submit" className="btn btn-warning loginPage-primary btn-block">
                        Registration
				</Link> */}
                {/* </form> */}


            </div>
        </div >
    );
};

export default Register;