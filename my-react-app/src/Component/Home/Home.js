import { Box, Stack } from '@mui/material'
import React from 'react'
import RighBar from "./RightBar"
import Feed from "./Feed"
import SideBar from "./SideBar"

function Home() {

  
  return (
   <Box>
    <Stack direction="row" spacing={2} justifyContent="space-between">
      <SideBar/>
      <Feed />
      <RighBar />
    </Stack>
   </Box>
  )
}

export default Home;