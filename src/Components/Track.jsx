// No need to import React in React 17+

function Track ({performer, url}) {
    return (
        <div>
            <h3>{performer}</h3>
            {url && <audio controls src={url} />}
        </div>
    );
}

export default Track;
