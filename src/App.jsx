/**
 * src/App.jsx
 */


import React from 'react'
import { PageProvider } from './contexts/PageContext'
import {
  Header,
  Page,
  Footer
} from './components'


export const App = () => {

  return (
    <PageProvider>
      <Header />
      <Page />
      <Footer />
    </PageProvider>
  )
}