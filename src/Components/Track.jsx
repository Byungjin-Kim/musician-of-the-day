// No need to import React in React 17+

function Track ({title, performer, conductor, url}) {
    return (
        <div>
            <h3>{title}</h3>
            <p>conductor:{conductor}</p>
            <p>{performer}</p>
            {url && <audio controls src={url} />}
        </div>
    );
}

export default Track;
