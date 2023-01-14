import {
  Box,
  FormLabel,
  Select,
  styled,
  TextField,
  Typography,
  MenuItem,
} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
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

const SubBox = styled(Box)`
  align-items: center; 
  margin-left: 90px;
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
//   margin-top: 20px;
`
const StyledPara = styled(Typography)`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-left: 140px;
//   margin-top: 20px;
`

const FormContainer = () => {
  return (
    <StyledBox>
        
      <StyledTypo variant="h3">It's a delight to have you onboard</StyledTypo>
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
          <MenuItem value={10}>Infosis</MenuItem>
          <MenuItem value={20}>Wipro</MenuItem>
          <MenuItem value={30}>TCS</MenuItem>
        </Select>
      </FormControl>
      <label>Company Size</label>
      <Box>
      <Typography>1-20</Typography>
      </Box>
      </SubBox>
    </StyledBox>
  )
}

export default FormContainer
