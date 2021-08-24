import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const FeedbackPost = (props) => {
    const classes = useStyles();

    const {name, company, image, description} = props.feedback
   
    return (
        <div class=" m-2" style={{ width: '18rem',borderTopStyle:'groove',borderTopWidth:'5px',borderTopColor:'cyan',backgroundColor:'white' }}>
            <div className="row card-body">
                <div className=" col-md-3 col-3">
                    <Avatar alt="Remy Sharp" src={image} className={classes.large} /> 
                    {/* <img style={{ width:'100%'}} src={image} class="card-img-top rounded mx-auto d-block" alt="..."/> */}

                    
                </div>
                <div className="col-md-9 col-9" style={{textAlign:'center'}}>
                    <h5 class="card-title">{name}</h5>
                    <h6 className="card-title">{company}</h6>
                </div>
            </div>

            <div className="card-body" >
                <p class="card-text">{description}</p>

            </div>
        </div>
    );
};

export default FeedbackPost;