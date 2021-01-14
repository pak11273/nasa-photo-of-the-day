import React from 'react'

export default function Photo({url}) {
    return (
        <div className="photo">
            <img src={url} alt="" />
        </div>
    )
}
