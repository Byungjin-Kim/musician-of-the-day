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
            });
        }
        fetchComposer();
}, []);

    // show only year ()
    const year = (dateStr) => (dateStr ? String(dateStr).slice(0, 4) : "");

    if (!info) return <div>Loading musician…</div>;
    if (error) return <div>Error: {error}</div>

    return (
        <div>
          {info.portrait ? (
            <img
             src={info.portrait}
             alt={`${info.name} portrait`}
             width={200}
             height={200}
             style={{ objectFit: "cover" }}
             />
            ) : null}
         <h2>{info.name}</h2>
         <p>{year(info.birth)}–{year(info.death)}</p>
         <p>{info.epoch}</p>
        </div>
    );
}

export default MusicianCard;