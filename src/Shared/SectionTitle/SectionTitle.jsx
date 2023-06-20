import React from 'react';
import "./Style.css"

const SectionTitle = ({title}) => {
    return (
        <div className='py-10 text-center'>
            <h2 className='text-2xl font-bold header'>{title}</h2>
        </div>
    );
};

export default SectionTitle;