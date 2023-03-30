import React, { useEffect, useState } from 'react';
import Ai from '../Ai/Ai';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [ais, setAis] = useState([]);
    const [all, setAll] = useState(false); //show all btn's
    const [aiId, setAiId] = useState(null); //To get id to fethc data
    const [ai, setAi] = useState({}); //to pass id by <Modal/>
    
    const showAllAis = () => {
        setAll(true);
    };

    const sortByDate = () => {
        const sortedAis = ais.sort((a, b)=>{
            return new Date(b.published_in) - new Date(a.published_in)
        });
        setAis([...ais, sortedAis])
    };

useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${aiId}`)
    .then(resp => resp.json())
    .then(aiId => setAi(aiId.data))
},[aiId])

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
        <span onClick={()=>sortByDate()}>
        <Button>Sort By date</Button>
        </span>
       <div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                 ais.slice(0, all? 12 : 6).map(ai => <Ai ai={ai} key={ai.id} setAiId={setAiId} />)
            }
        </div>

        
        
       </div>
            {!all && (
                    <span onClick={()=> showAllAis()}>
                    <Button>See More</Button>
                    </span> 
            )}
            <Modal ai={ai}/>      
       </>
    );
};

export default Card;