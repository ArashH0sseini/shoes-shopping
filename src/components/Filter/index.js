/* eslint-disable react-hooks/rules-of-hooks */
import { Collapse, Grid } from '@mui/material'
import React, { useState } from 'react'
import Brands from './Brands'
import Category from './Category'
import Title from './Title'
import Sort from './Sort'
import Price from './Price'
import Colors from './Colors'
import Size from './Size'

export default function index() {
  const [open, setOpen] = useState(false)
  return (
    <Collapse in={open || window.innerWidth > 580} collapsedSize={30}>
      <Grid container direction="column">
        <Title open={open} onClick={() => setOpen(!open)} title="فیلترها" />
        <Brands />
        <Sort />
        <Category />
        <Price />
        <Colors />
        <Size />
      </Grid>
    </Collapse>
  )
}
