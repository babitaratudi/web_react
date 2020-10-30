import React from 'react';
import {Search, Create, ThumbUpAlt, Comment} from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';
import {Card} from 'react-bootstrap';
import {Button} from '@material-ui/core';
 const Community = () =>{
    return(
        <div>
           
            <div className="container-fluid ">
                <div className="row " style={{maxWidth:'80%'}}>
                    <div className="col-lg-5" style={{display:"flex", }}>
                        <Search className="mt-2" style={{display:"inline", color:"#5E81F4"}}/>
                    <input className="form-control" placeholder="Search " name="search"/>
                    </div>
                    <div className="col-lg-7">
                        <button className="btn mx-3 active" style={{color:"#5E81F4"}}>Discuss</button>
                        <button className="btn mx-3" style={{color:"#5E81F4"}}>Problems</button>
                    </div>
                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-lg-7" style={{display:"flex"}}>
                        <Create style={{color:"#5E81F4"}} className="mt-2"/>
                        <input className="form-control mx-2" placeholder="Write Something" style={{height:"50px"}}/>
                        <Chip color="primary" className="mt-2 mx-2" icon={<Search/>} label="Find posts by tags" />
                    </div>
                    <div className="col-lg-5">

                    </div>
                </div>
                <br/>
                <br/>
                <Card className="my-2">
                <Card.Header className="bg-light" as="h5">Prof. posted Google L3 | Microsoft L61 | Goldman Sachs</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button color="primary" startIcon={<ThumbUpAlt/>} className="mx-2">Like</Button>
                    <Button color="primary" startIcon={<Comment />} className="mx-2">Comment</Button>
                </Card.Body>
                </Card>
                <Card className="my-2">
                <Card.Header className="bg-light" as="h5">Prof. posted Google L3 | Microsoft L61 | Goldman Sachs</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button startIcon={<ThumbUpAlt/>} color="primary" className="mx-2">Like</Button>
                    <Button startIcon={<Comment />} color="primary" className="mx-2">Comment</Button>
                </Card.Body>
                </Card>
            </div>

        </div>
    );
}

export default Community;