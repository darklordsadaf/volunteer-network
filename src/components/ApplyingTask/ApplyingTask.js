import React from 'react';
import { Link } from 'react-router-dom';
import image from '../fakeData/images/extraVolunteer.png'

const ApplyingTask = (props) => {
    const { task } = props;


    return (
        <div style={{ border: '1px solid lightGray', margin: "90px 10px 10px 150px", padding: "30px" }} className="row col-md-4 ">
            <div className="col-md-4">
                <img style={{ width: "150px" }} src={image} alt="" />
            </div>
            <div className="col-md-6" style={{ textAlign: "right" }}>
                <h4>{task.library}</h4>
                <h5>{task.date}</h5>
                <Link style={{ padding: "5px", borderRadius: "6px", backgroundColor: 'lightGray', color: "black" }} onClick={() => props.handleDelete(task._id)}>Cancel</Link>
            </div>
        </div>
    );
};

export default ApplyingTask;