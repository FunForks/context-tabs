/**
 * src/components/Page.jsx
 */


import React, { useContext } from 'react'
import { PageContext } from '../contexts/PageContext'
import {
  Home,
  About,
  Contact
} from './index'


export const Page = () => {
  const { page } = useContext(PageContext)

  switch (page) {
    case "home": return <Home />
    case "about": return <About />
    case "contact": return <Contact />
  }
}