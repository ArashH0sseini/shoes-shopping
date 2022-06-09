import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Title({ title }) {
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="mt-3 sm:mt-[30px] mb-[25px] mx-3 sm:mx-0 py-[5px] relative before:absolute before:w-1 before:h-full before:bg-[#00c1c9] before:rounded-lg"
    >
      <Typography variant="h5" className="mr-4">
        {title}
      </Typography>
      <Button variant="outlined" size="small">
        مشاهده همه
      </Button>
    </Grid>
  )
}
