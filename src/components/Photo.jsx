import React from 'react'
import styled from 'styled-components';

const PhotoStyles = styled.div`
  max-width: 740px;
  margin: 0 auto;
  > img {
    width: 100%;
  }
`
export default function Photo({url}) {
    return (
        <PhotoStyles className="photo">
            <img src={url} alt="" />
        </PhotoStyles>
    )
}
