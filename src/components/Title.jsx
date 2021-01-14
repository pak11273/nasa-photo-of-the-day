import React from 'react'

export default function Title({title}) {
    return (
        <div>
            <h1 className="title"><span role="img" aria-label="rocket ship">🚀</span> {title}</h1>
        </div>
    )
}
