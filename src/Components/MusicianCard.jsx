// No need to import React in React 17+

import { useState, useEffect } from "react";
import axios from "axios";



function MusicianCard () {
    // composer data state and error state
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    // effect: fetch data from API
    useEffect(() => {
        console.log("[MusicianCard] mounted");
    }, []);





    return <div>MusicianCard Here</div>;
}

export default MusicianCard;