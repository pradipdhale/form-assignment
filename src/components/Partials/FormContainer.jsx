import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)`
   position: absolute;
   width: 560px;
   height: 611px;
   margin-top: 93px;
   margin-left: 440px;
   border-radius: 15px;
   padding: 40px 91px 40px 24px;
   gap: 24px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   background-color: #ffffff;
   box-shadow: 4px 4px 20px 0;
`

const StyledTypo = styled(Typography)`
   width: 378px;
   height: 60px;
   margin-top: 72px;
   font-weight: 500;
   font-size: 26px;
   line-height: 30px;
   text-align: center;
   margin-left: 120px;
`
const StyledPara = styled(Typography)`
   font-family: Roboto;
   font-style: normal;
   font-weight:400;
   font-size: 14px;
   line-height: 18px;
   text-align: center;
   margin-left: 140px;
`

const FormContainer = () => {
  return (
    <StyledBox>
        <StyledTypo variant='h3'>It's a delight to have you onboard</StyledTypo>
        <StyledPara>Help us know you better.<br /> (This is how we optimize Wobot as per your business needs)</StyledPara>
    </StyledBox>
  )
}

export default FormContainer