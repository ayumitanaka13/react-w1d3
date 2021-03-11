import React from 'react'

const Modal = ({icon, cityName, high, low, weather}) => {

    return (
        <>
            <div id='modal1' className='modal'>
                <div className='modal-content'>
                    <h4>{cityName}</h4>
                    <p>
                    High: {high} - Low: {low}
                    </p>
                    <p>
                    {weather} <img src={icon} alt='icon' />
                    </p>
                </div>
                <div className='modal-footer'>
                    <a
                    href='#!'
                    className='modal-close waves-effect waves-green btn-flat'
                    >
                    Close
                    </a>
                </div>
            </div>
        </>
    )
}

export default Modal