import React from 'react'
import styled from 'styled-components'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px 8px 8px 8px;
  align-content: space-between;
`

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ELE206 Lab 4</title>
        <link rel="icon" href="/PUwhite.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}> Title </h1>
      </main>

      <footer className={styles.footer}>
        <a> ELE206 Fall 2020
          <img src="/PU.svg" alt="Princeton Logo" className={styles.logo} />
        </a>
      </footer>
    </div >
  )
}

export default Home; 