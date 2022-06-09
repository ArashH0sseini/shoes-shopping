import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Item from './Item'
import ItemLoading from './ItemLoading'
import P2 from '../../assets/images/p2.png'

export default function HighHeel() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <Grid
      container
      item
      xs={12}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      {loading ? (
        <>
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
          <ItemLoading />
        </>
      ) : (
        <>
          <Item image={P2} />
          <Item image={P2} />
          <Item image={P2} />
          <Item image={P2} />
          <Item image={P2} />
        </>
      )}
    </Grid>
  )
}
