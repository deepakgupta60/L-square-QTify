import React from 'react'


import { Button } from '@mui/material'
// import styles from "./Button.module.css";

const BasicButton = ({children}) => {
  return (
    <Button style={{backgroundColor:"#121212", color:"#34C94B", fontFamily: "Poppins, sans-serif"}} >
        {children}
    </Button>
  )
}

export default BasicButton