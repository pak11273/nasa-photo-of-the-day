import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  font-size: 2rem;
  font-weight: 900;
  padding: 2rem;
`
export default function Header() {

    return (
        <HeaderStyles>NASA Photo of the Day</HeaderStyles>
    )
}