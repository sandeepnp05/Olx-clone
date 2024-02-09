import React, { useState } from 'react';
import axios from 'axios';

function Temp() {
    const [responseData, setResponseData] = useState(null);

    const callApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setResponseData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            {responseData ? <h1>{responseData[3].name}</h1> : null}
            <button onClick={callApi}>Click</button>
        </div>
    );
}

export default Temp;
