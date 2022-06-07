import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Slider from '../../components/Slider'

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" className="my-3 h-[350px]">
        <Grid item lg={5} className="h-[350px] p-[10px] pr-0">
          <Slider />
        </Grid>
        <Grid
          item
          lg={7}
          className="border-2 border-black border-solid h-[350px]"
        >
          brands
        </Grid>
      </Grid>
      <Grid container className="h-48 my-2">
        پرفروش های مردانه
      </Grid>
      <Grid container className="h-48 my-2">
        پرفروش های زنانه
      </Grid>
    </Container>
  )
}
