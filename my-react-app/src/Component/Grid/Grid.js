import { Box, Grid, Paper, styled } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import MiniDrawer from '../Home/SideBar'
import { RedCenterText } from "../Style/Grid/Index";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,

}));

function Grids() {
  return (
    <Box sx={{display:"flex" , position:"relative"}}>
        <MiniDrawer />
    <Grid container spacing={5}>
      <Grid item xs={3} />

      <Grid item xs={12} md={6}>
        <Grid item xs={12}>
          <Item>xs=12</Item>
        </Grid>
        <Grid container spacing={0} alignItems="center">
          <Grid item xs={3} md={3}>
            <Typography variant="h6" align="center" style={{ width: '100%' }}>
              Random Text
            </Typography>
          </Grid>
        <Grid item xs={5} md={4}> 
          <TextField label="Random Input" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={1}  >
          <Checkbox defaultChecked color="primary" style={{ width: '100%' }} />
        </Grid> 
        <Grid item xs={3} md={4}>
            <Button variant="contained" color="primary" fullWidth>
              Click Me
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3} />
    <RedCenterText>Hello</RedCenterText>
    </Grid>
    </Box>
  );
}

export default Grids;
