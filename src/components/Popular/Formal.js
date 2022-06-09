import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Item from './Item'
import ItemLoading from './ItemLoading'
import P3 from '../../assets/images/p3.png'

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
      className="flex-nowrap scrollbar-hide overflow-scroll lg:flex-wrap lg:overflow-auto"
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
          <Item image={P3} />
          <Item image={P3} />
          <Item image={P3} />
          <Item image={P3} />
          <Item image={P3} />
        </>
      )}
    </Grid>
  )
}
