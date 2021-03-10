import React from 'react'

const Header = ({cityName, temp}) => {
    return (
        <div className="row">
            <h2>{cityName}</h2>
            <h5>Today's temp is {temp}</h5>
        </div>
    )
}

export default Header
