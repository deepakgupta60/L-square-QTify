import React from 'react'

import { Button } from '@mui/material'

const BasicButton = ({children}) => {
  return (
    <Button sx={{backgroundColor:"#121212", color:"#34C94B"}}>
        {children}
    </Button>
  )
}

export default BasicButton