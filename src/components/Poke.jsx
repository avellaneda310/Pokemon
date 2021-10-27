import React from 'react';

const Poke = ({id, name, url}) => {
    return (   
    <div className="col-4 mt-3" key={id}>
        <div className="card">
        <img src={url} alt={id} className="card-img-top"/>
                <div className="card-body text-dark">
                    <h4 className="card-title">{name}</h4>
                </div>
        </div>
    </div>
    );
}
 
export default Poke;




