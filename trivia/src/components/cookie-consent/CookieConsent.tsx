import React from 'react'
import styles from "./CookieConsent.module.css"
import {useCookies} from 'react-cookie'

const CookieConsent = () => {
    const [_, setCookie] = useCookies(['cookie_consent'])

    const acceptCookies = () => {
        setCookie('cookie_consent', true)
    }

  return (
    <div className={styles.wrapper}>
        <div>
            <p>Az oldal sütiket használ, hogy te 🍪 legyél</p>
            <button onClick={acceptCookies}>Elfogadom</button>
        </div>
    </div>
  )
}

export default CookieConsent