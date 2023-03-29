import React from 'react';

const Ai = (props) => {
    const {name, image, description, published_in, links, features} = props.ai;

    return (
<>
    <div className="card w-full bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
            <img src={image} alt="Ai" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <p>Features :</p>
            {
                features.map((feature, index) => <p>{index+1} . {feature}</p>)
            }
            <hr className='border-2 border-info w-full' />
            <h2 className="card-title">{name}</h2>
            <div className='flex justify-between w-full'>
            <div><p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>
</span> {published_in}</p></div>
            <div><p ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</p></div>
            </div>
            
        </div>
    </div>
</>
    );
};

export default Ai;