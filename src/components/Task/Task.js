import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Task = ({ task }) => {
    // console.log(task)
    return (
        <Link to="/register" className="col-md-3 " style={{ padding: "20px 50px 20px 50px" }}>
            <Card style={{ width: '18rem', }}>
                <Card.Body style={{ backgroundColor: `${task.color}`, color: 'white', padding: '0px 0px 20px 0px', borderRadius: '10px' }}>

                    <Card.Img src={task.pic} />
                    <Card.Title style={{ textAlign: 'center', margin: '10px 0px 0px 0px' }} >{task.name}</Card.Title>
                </Card.Body>
            </Card>

        </Link>
    );
};

export default Task;