import React, { useContext } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import fakeData from '../fakeData';
import Header from '../Header/Header';
import Task from '../Task/Task';

const Home = () => {

    const tasks = fakeData;
    const handleName = (name) => {
        sessionStorage.setItem('token', name);
    }
    return (
        <div className="row">
            <Header></Header>
            <h1 style={{ margin: '100px 400px ' }}>I GROW BY HELPING PEOPLE IN NEED</h1>


            <InputGroup className="mb-3" style={{ margin: "0px 500px 100px 500px" }}>
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text style={{ backgroundColor: "#3F90FC", color: "white" }} id="basic-addon2">Search</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>



            {
                tasks.map(task => <Task key={task.id} handleName={handleName} task={task}></Task>)
            }
        </div >
    );
};

export default Home;