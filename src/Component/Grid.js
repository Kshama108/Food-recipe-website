import { Grid } from '@mui/material'
import React from 'react'

export const Demogrid = () => {
  return (
    <div><Grid container spacing={2}>
    <Grid item xs={8}>
    Left
    </Grid>
    <Grid item xs={4}>
     Right
    </Grid>
    
  </Grid></div>
  )
}
