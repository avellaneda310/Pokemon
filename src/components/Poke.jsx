import React from 'react';


const Poke = ({name, url}) => {
    return (   
    <div className="col-4 mt-3" key={name}>
        <div className="card">
        <img src={url} alt={name} className="card-img-top"/>
                <div className="card-body text-dark">
                    <h4 className="card-title">{name}</h4>
                </div>
        </div>
    </div>
    );
}
 
export default Poke;
