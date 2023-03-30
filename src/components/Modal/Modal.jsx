import React from 'react';

const Modal = (props) => {
   // console.log(props.ai);
     const {accuracy, tool_name, image_link, website, description, integrations, featcher } = props.ai;
     //console.log(image_link[0]);
    return (
<>
            
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />


                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">
                    
                    
                <div className="card-body">
                    <h2 className="card-title w-96">{description? description : 'Not Found'}</h2>


                    <div>
                        <p className='text-2xl'>Features</p>
                        <p className='text-2xl'>Intigrations</p>
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