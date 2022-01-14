import axios from "axios";
import { useState } from "react";

const apiUrl = 'https://us-central1-bike-communtr-jmoore.cloudfunctions.net/api/commute'

function AddCommuteForm() {
    const [user, setUser] = useState('');
    const [commute, setCommute] = useState('');
    const [distance, setDistance] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault(); // prevents form from refreshing page

            // submit to our API
            axios.post(apiUrl, {
                user,
                commute,
                distance
            })
        }}>
            <p>
                <label>User: <input 
                    value={user} 
                    onChange={e => setUser(e.target.value)}
                    name="user" />
                </label>
            </p>

            <p>
                <label>Commute: <input 
                    value={commute} 
                    onChange={e => setCommute(e.target.value)} 
                    name="commute" />
                </label>
            </p>

            <p>
                <label>Distance: <input 
                    value={distance} 
                    onChange={e => setDistance(e.target.value)} 
                    type="number" 
                    name="distance" />
                </label>
            </p>

            <p>
                <button>Add Commute</button>
            </p>
        </form>
    )
};

export default AddCommuteForm;