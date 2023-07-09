'use client'
import { Box } from '@mui/material'
import React from 'react'

function CategoryList({params}) {
  return (
    <Box>
        {params.slug}
    </Box>
  )
}

export default CategoryList