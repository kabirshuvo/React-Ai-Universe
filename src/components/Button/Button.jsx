import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center py-7'>
<button className="btn btn-info">{children}</button>

        </div>
    );
};

export default Button;