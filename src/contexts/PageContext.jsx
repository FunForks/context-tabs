/**
 * PageContext.jsx
 *
 * 
 */

import React, { createContext, useState } from 'react'

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
  const pages = [ "home", "about", "contact" ]
  const [ page, setPage ] = useState(pages[0])

  const titleCase = name => {
    return name[0].toUpperCase() + name.slice(1)
  }

  return (
    <PageContext.Provider
      value ={{
        pages,
        page,
        setPage,
        titleCase
      }}
    >
      {children}
    </PageContext.Provider>
  )
}