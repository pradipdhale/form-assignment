import {
  Box,
  FormLabel,
  Select,
  styled,
  TextField,
  Typography,
  MenuItem,
  Button,
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import React from 'react'

const StyledBox = styled(Box)`
//   position: absolute;
//   width: 560px;
  height: 611px;
//   margin-top: 93px;
//   margin-left: 440px;
  border-radius: 15px;
  padding: 40px 91px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  box-shadow: 4px 4px 20px 0;
`

const SubBox = styled(Box)`
  align-items: center; 
//   margin-left: 90px;
`

const StyledTypo = styled(Typography)`
  width: 378px;
//   height: 60px;
  margin-top: 72px;
  font-weight: 500;
  font-size: 26px;
  line-height: 30px;
  text-align: center;
//   margin-left: 120px;
//   margin-top: 20px;
`
const StyledPara = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
//   margin-left: 140px;
//   margin-top: 20px;
`

const StyledButton = styled('button')`
  margin: 10px 12px;
  border: none;
  font: Inter;
  weight: 500;
  font-size: 14px;
  text-align: center;
  border-radius: 1px;
  line-height: 16px;
`
const ButtonStyle = styled(Button)`
  background-color: #3766E8;
  color: #ffffff;
//   margin-left: 30px;
`

const FormContainer = () => {
  return (
    <StyledBox>
        
      <StyledTypo className='newh3' variant="h3">It's a delight to have you onboard</StyledTypo>
      <StyledPara>
        Help us know you better.
        <br /> (This is how we optimize Wobot as per your business needs)
      </StyledPara>
      <SubBox>
      <label>Company Name</label>
      <TextField placeholder="e.g. Example Inc" variant="outlined" fullWidth style={{ marginTop: 10, marginBottom: 20 }}/>
      <label style={{ marginTop: 10 }} >Industry</label>
      <FormControl fullWidth style={{ marginTop: 10, marginBottom: 10 }} >
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select label="Select">
          <MenuItem>Infosis</MenuItem>
          <MenuItem>Wipro</MenuItem>
          <MenuItem>TCS</MenuItem>
        </Select>
      </FormControl>
      <label>Company Size</label>
      <Box>
      <StyledButton className='button' >1-20</StyledButton>
      <StyledButton className='button'>21-50</StyledButton>
      <StyledButton className='button'>51-200</StyledButton>
      <StyledButton className='button'>201-500</StyledButton>
      <StyledButton className='button'>500+</StyledButton>
      </Box>
      </SubBox>
      <ButtonStyle fullWidth>Get Started</ButtonStyle>
    </StyledBox>
  )
}

export default FormContainer
