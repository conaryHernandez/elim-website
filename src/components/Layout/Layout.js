// components/Layout.js
import React, { Component } from 'react';
import Head from 'next/head';
import Header from '../App/components/Header/Header';
import Footer from '../App/components/Footer/Footer';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;800;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        {children}
      </div>
    );
  }
}
