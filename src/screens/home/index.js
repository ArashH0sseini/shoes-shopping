import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Slider from '../../components/Slider'
import Categories from '../../components/Category'

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Grid container className="my-3 flex">
        <Grid
          item
          lg={8}
          xs={12}
          className="h-[300px] sm:h-[500px] p-[10px] sm:pr-0"
        >
          <Slider />
        </Grid>
        <Grid
          item
          lg={4}
          xs={12}
          className="h-auto sm:h-[500px] p-[10px] sm:pr-0"
        >
          <Categories />
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
