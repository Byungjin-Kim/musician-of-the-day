// No need to import React in React 17+
import { useState, useEffect } from "react";
import axios from "axios";



function MusicianCard () {
    // composer data state and error state
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    // effect: fetch data from API
    useEffect(() => {
        
        const url = "https://api.openopus.org/composer/list/ids/145.json" // Beethoven open opus url
        // console.log('start fetch:', url)

        axios.get(url)
        .then(res => {
            // console.log("response:", res.data);
    
            const composerData = res.data.composers[0];
            console.log(composerData);

        })
        .catch(err => {
            console.log("fetch error:", err.message);
            setError(err.message);
        })



    
    }, []);





    return <div>MusicianCard Here</div>;
}

export default MusicianCard;