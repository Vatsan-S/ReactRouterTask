import React from 'react';
import Card from '../Components/Card';

const Cybersecurity = ({data}) => {
    let csData = []
    data.forEach((ele, index)=>{
        if(ele.topic === "Cyber Security"){
            csData.push(ele)
        }
       })
    return (
        <div>
            <div className="card-body d-flex">
            {
                csData.map((ele, index)=>{
                    return <Card ele={ele} index={index}/> 
                })
            }
            </div>
        </div>
    );
};

export default Cybersecurity;