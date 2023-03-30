import React from 'react';

const Modal = (props) => {
   // console.log(props.ai);
     const {accuracy, tool_name, image_link, website, description, integrations, features } = props.ai;
     //console.log(integrations);
    return (
<>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />

                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                    
                <div className="card-body">
                    <h2 className="card-title w-96">{description? description : 'Not Found'}</h2>

                    <div className='flex justify-between'>
                        <div>
                        <p className='text-2xl'>Features</p>
                        {
                            Object.values(features || {}).map(value => <p>{value.feature_name}</p>)
                        }
                        </div>
                        <div>
                        <p className='text-2xl'>Intigrations</p>
                        
                        {integrations &&
                        integrations?.map(int => <p>{int? int : 'no int'}</p>)}
                        
                        </div>
                    </div>
                    
                </div>
                    <figure>
                        <img 
                        className='w-full h-64' 
                        src={image_link && image_link[0]} 
                        alt="Ai Image"/>
                    </figure>
                
            </div>
            <div className="modal-action">

                <label htmlFor="my-modal-5" className="btn">Yay!</label>

            </div>
        </div>
    </div>
</>
    );
};

export default Modal;