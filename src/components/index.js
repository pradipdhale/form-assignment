import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import FormContainer from './Partials/FormContainer'
import Header from './Partials/Header'


const StyledBox = styled(Box)`
   width: 100%;
   height: 500px;
//    background-color: #E5E5E5;
`

const MainBox = () => {
  return (
    <StyledBox>
    <Header />
    <FormContainer />
    </StyledBox>
  )
}

export default MainBox