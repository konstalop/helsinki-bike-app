import React from 'react'

/**
 * Footer to display creator and source code location.
 * @returns footer component
 */
const Footer = () => {

    return (
        <div className='footer-container'>
            <h5 className='footer-text'>© 2022 | Konsta Löppönen</h5>
            <a className='footer-link' href="https://github.com/konstalop/helsinki-bike-app"> <i className="fa fa-github"></i></a>
        </div>
    )
}

export default Footer