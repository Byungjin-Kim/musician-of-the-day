// No need to import React in React 17+
import { useState, useEffect } from "react";
import axios from "axios";



function MusicianCard () {
    // composer data state and error state
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    // effect: fetch data from API
    useEffect(() => {
        function fetchComposer() {
            const url = "https://api.openopus.org/composer/list/ids/145.json" // Beethoven open opus url

            axios.get(url)
                .then(res => {
                // console.log("response:", res.data);
                const composerData = res.data?.composers?.[0]; // get composer data (undefined if missing)
                if(!composerData) return setError("Composer not found");

            // put data info into state
                setInfo({
                    name: composerData.complete_name,
                    birth: composerData.birth,
                    death: composerData.death,
                    epoch: composerData.epoch,
                    portrait: composerData.portrait
                });
            })
            .catch(err => {
                console.log("fetch error:", err.message);
                setError(err.message);
            });
        }
        fetchComposer();
}, []);


    return <div>MusicianCard Here</div>;
}

export default MusicianCard;