import React, {useEffect, useState} from 'react';

const Score = ({value})=>{

    return (
        <div className="score wrapper">
            <div className="title">Score</div>
            <div className="value dark-text">{value}</div>
        </div>
    )
}

export default Score;