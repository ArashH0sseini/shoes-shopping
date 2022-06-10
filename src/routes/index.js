import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../screens/home'
import Search from '../screens/search'

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  )
}
