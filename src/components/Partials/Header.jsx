import styled from '@emotion/styled'
import { Box } from '@mui/material'
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
    <Box>
    <StyledIMG src={LOGO} />
    </Box>
  )
}

export default Header