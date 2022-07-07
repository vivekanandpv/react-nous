import React from 'react';
import {useHistory} from 'react-router-dom';

const About = (props) => {
    const history = useHistory();

    const navigate = () => {
        history.push({
            pathname: '/contact',
            hash: 'fragment',
            search: '?key=val&q=a'
        });
    }
    return (
        <>
            <h3>About Component</h3>
            <button className="btn btn-primary" onClick={navigate}>To Contact</button>
        </>
    );
};

export default About;
