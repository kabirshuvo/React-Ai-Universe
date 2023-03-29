import React, { useEffect, useState } from 'react';
import Ai from '../Ai/Ai';

const Card = () => {
    const [ais, setAis]= useState([]);

    

useEffect(()=>{
    const loadAis = async () => {

        const resp = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const ais = await resp.json();
       

        console.log(ais.data.tools);
        setAis(ais.data.tools);        
    };

    loadAis();
}, [ ]);


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                ais.slice(0, 6).map(ai => <Ai ai={ai} key={ai.id} />)
            }
        </div>
    );
};

export default Card;