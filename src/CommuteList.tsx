import axios from "axios";
import { useEffect, useState } from "react";
import CommuteItem from "./CommunteItem";

function CommuteList() {
    const apiUrl = 'https://us-central1-bike-communtr-jmoore.cloudfunctions.net/api/commute'
    const [commutes, setCommutes] = useState([]);
    const [username, setUsername] = useState('');
    useEffect(() => {
        // getting commute from api
        axios.get(apiUrl + '/' + username + '?q=123').then( (response) => {
            const commutes = response.data;
             // set them to a state
            setCommutes(commutes);
        })
    }, [username])
    return (
        <div>
            <input 
                value={username} 
                onChange={ e => setUsername(e.target.value)} 
            />
            <h2>Results for {username}</h2>
            <ul>{
                commutes.map((commute) => {
                    return <CommuteItem commute={commute} />
                })
            }</ul>
        </div>
    )
};

export default CommuteList;