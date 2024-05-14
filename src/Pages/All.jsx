import React from 'react';
import Card from '../Components/Card';

const All = ({data}) => {
    
    
    return (
        <div>
            <div className="card-body d-flex">{
                data.map((ele, index)=>{
                    return <Card ele={ele} index={index}/> 
                })
            }
            </div>
        </div>
    );
};

export default All;