import React from 'react'

const Loader = () => {
    return (
        <div className='flex place-content-center mt-64 z-50'>
            <img className='flex animate-ping wd-24 h-24 absolute inline-flex' src="../src/assets/img/loader.png" alt="logo" />
            <img className='flex relative inline-flex wd-24 h-24' src="../src/assets/img/loader.png" alt="logo" />
        </div>
    )
}

export default Loader