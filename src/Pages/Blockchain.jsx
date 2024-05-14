import React from 'react';
import Card from '../Components/Card';

const Blockchain = ({data}) => {
    let bcData = []
    data.forEach((ele, index)=>{
        if(ele.topic === "Blockchain"){
            bcData.push(ele)
        }
       })
    return (
        <div>
            <div className="card-body d-flex">
            {
                bcData.map((ele, index)=>{
                    return <Card ele={ele} index={index}/> 
                })
            }
            </div>
        </div>
    );
};

export default Blockchain;