import React from 'react';

const Button = ({children}) => {
    console.log(children.length)
    return (
        <div>
<button className="btn btn-info">{children}</button>
<button className="btn btn-success">{children}</button>
<button className="btn btn-warning">{children}</button>
<button className="btn btn-error">{children}</button>
        </div>
    );
};

export default Button;