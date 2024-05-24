/**
 * src/components/Footer.jsx
 */


import React, { useContext } from 'react'
import { PageContext } from '../contexts/PageContext'


export const Footer = () => {
  const {
    page,
    setPage,
    pages,
    titleCase
  } = useContext(PageContext)


  const choosePage = ({ target }) => {
    setPage(target.name)
  }

  const buttons = pages.map( name => {
    const title = titleCase(name)

    const className = name === page ? "selected" : ""

    return (
      <button
        key={name}
        name={name}
        className={className}
      >
        {title}
      </button>
    )
  })

  


  return (
    <footer 
      onClick={choosePage}
    >
      {buttons}
    </footer>
  )
}