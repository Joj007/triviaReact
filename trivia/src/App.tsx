import React from 'react'
import CookieConsent from './components/cookie-consent/CookieConsent'
import { useCookies } from 'react-cookie'

const App = () => {
  const [cookie] = useCookies(["cookie_consent"])
  return (
    <>
    {!cookie.cookie_consent && <CookieConsent/>}
    </>
  )
}

export default App