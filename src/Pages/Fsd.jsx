import React from 'react';
import Card from '../Components/Card'

const Fsd = ({data}) => {
    let fsdData = []
    data.forEach((ele, index)=>{
        if(ele.topic === "Full Stack Development"){
            fsdData.push(ele)
        }
       })
    
    return (
        <div>
            <div className="card-body d-flex">
            {
                fsdData.map((ele, index)=>{
                    return <Card ele={ele} index={index}/> 
                })
            }
            
            </div>
        </div>
    );
};

export default Fsd;