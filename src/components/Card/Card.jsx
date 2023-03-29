import React, { useEffect, useState } from 'react';
import Ai from '../Ai/Ai';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [ais, setAis] = useState([]);
    const [all, setAll] = useState(false); //show all btn's
    const showAllAis = () => {
        setAll(true);
    };

useEffect(()=>{
    const loadAis = async () => {
        const resp = await fetch('https://openapi.programming-hero.com/api/ai/tools');
        const ais = await resp.json();
        setAis(ais.data.tools);        
    };

    loadAis();
}, [ ]);




    return (
       <>
       <div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                 ais.slice(0, all? 12 : 6).map(ai => <Ai ai={ai} key={ai.id} />)
            }
        </div>

        
        
       </div>
            {!all && (
                    <span onClick={()=> showAllAis()}>
                    <Button>See More</Button>
                    </span> 
            )}
            <Modal/>      
       </>
    );
};

export default Card;