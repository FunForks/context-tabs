/**
 * src/components/Header.jsx
 */


import React, { useContext } from 'react'
import { PageContext } from '../contexts/PageContext'


export const Header = () => {
  const { page, titleCase } = useContext(PageContext)

  return (
    <header><h1>{titleCase(page)}</h1></header>
  )
}