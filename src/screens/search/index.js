import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import FilterList from '../../components/Filter'

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Grid container className="my-5">
        <Grid className="bg-[#131a21] p-4 rounded-xl" item lg={3}>
          <FilterList />
        </Grid>
        <Grid className="h-[500px]" item lg={9} />
      </Grid>
    </Container>
  )
}
