import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "test1@example.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src="./logo.PNG" alt="Me" width="10000" height="6000"/>
      <p>
        Silence isn't empty, it's full of answers - Narendra Jugnu during his chess games.  
      </p>
    </div>
  )
}

export default Bio
