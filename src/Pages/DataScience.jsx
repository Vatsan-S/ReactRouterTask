import React from 'react';
import Card from '../Components/Card';

const DataScience = ({data}) => {
    let dsData = []
    data.forEach((ele, index)=>{
        if(ele.topic === "Data Science"){
            dsData.push(ele)
        }
       })
    return (
        <div>
            <div className="card-body d-flex">
            {
                dsData.map((ele, index)=>{
                    return <Card ele={ele} index={index}/> 
                })
            }
            </div>
        </div>
    );
};

export default DataScience;