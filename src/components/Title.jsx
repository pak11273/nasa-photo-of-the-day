import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.h1` 
  font-size: 1.3rem;
`

export default function Title({title}) {
    return (
        <div>
            <TitleStyles className="title"><span role="img" aria-label="rocket ship">🚀</span> {title}</TitleStyles>
        </div>
    )
}
