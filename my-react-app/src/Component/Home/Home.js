import { Box, Stack } from '@mui/material'
import React from 'react'
import RighBar from "./RightBar"
import Feed from "./Feed"
import MiniDrawer from './SideBar'


function Home() {

  return (
   <Box>
    <Box sx={{display:"flex" , position:"relative"}}>
      <MiniDrawer />
      <Feed />
      <RighBar /> 
    </Box>
   </Box>
  )
}

export default Home;