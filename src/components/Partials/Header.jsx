import styled from '@emotion/styled'
import React from 'react'
import LOGO from '../../assets/logo.png'

const StyledIMG = styled('img')`
   height: 36.02px;
   width: 160px;
   margin-top: 60px;
   margin-left: 60px;
`

const Header = () => {
  return (
    <>
    <StyledIMG src={LOGO} />
    </>
  )
}

export default Header