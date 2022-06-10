import { Grid } from '@mui/material'
import React from 'react'
import Brands from './Brands'
import Category from './Category'
import Title from './Title'
import Sort from './Sort'
import Price from './Price'
import Colors from './Colors'
import Size from './Size'

export default function index() {
  return (
    <Grid container direction="column">
      <Title title="فیلترها" />
      <Brands />
      <Sort />
      <Category />
      <Price />
      <Colors />
      <Size />
    </Grid>
  )
}
