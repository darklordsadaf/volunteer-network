import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ApplyingTask from '../ApplyingTask/ApplyingTask';
import Header from '../Header/Header';

const Details = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5000/viewTask?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])



    const handleDelete = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                fetch('http://localhost:5000/viewTask?email=' + loggedInUser.email)
                    .then(res => res.json())
                    .then(data => setBookings(data));
                // event.target.parentNode.style.display = 'none';
            })
    }
    return (
        <div className="row">
            <Header></Header>

            {
                bookings.map(task => <ApplyingTask key={task._id} handleDelete={handleDelete} task={task}></ApplyingTask>)
            }

        </div>
    );
};

export default Details;