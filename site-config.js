const createConfig = require('dazzling-components/lib/create-config')
const github = 'https://github.com/bq1028/generated-dazzling.git'

module.exports = createConfig({
  name: 'dazzling',
  pitch: 'The scalable wood that bends and holds strong.',
  github,
  logo: 'logo.svg',
  siteUrl: 'bq1028.github.io/generated-dazzling',
  googleAnalyticsID: 'UA-FIX-ME-XXXXX', // GA tracking ID.

  docsDir: `${__dirname}/../content`,
  sections: require('../content/docs/sections.json').sections,

  // algolia full text search
  docSearch: {
    apiKey: 'xxxxxx',
    indexName: 'fixme',
    inputSelector: '#algolia-doc-search',
    debug: false // Set debug to true if you want to inspect the dropdown
  },

  nav: [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Docs',
      to: 'configuration',
      primary: 'Get Started'
    },
    { name: 'Github', secondary: 'Github', href: github }
  ],
  usedInText: 'See how to use with:',
  usedIn: [
    {
      topTitle: true,
      image: 'redux.svg',
      width: 100,
      title: 'Redux',
      link: 'redux'
    },
    {
      topTitle: true,
      image: 'node.svg',
      width: 95,
      title: 'Express.js',
      link: 'express'
    },
    {
      topTitle: true,
      image: 'react.svg',
      width: 175,
      title: 'React Native',
      link: 'react-native'
    }
  ],
  features: [
    {
      image: 'simple.svg',
      title: 'Simplicity is Key',
      content:
        'A simple wood that is very easy to use.'
    },
    {
      image: 'scalable.svg',
      title: 'Scales With Any Team',
      content:
        'Bends safely, and still holds strong, under plenty of weather conditions.'
    },
    {
      image: 'fast.svg',
      title: 'Fast is a Feature',
      content:
        'Since it is very lightweight, you can pack a bunch and still move quickly.'
    }
  ],
  copyright: 'Copyright © 2018. bq1028',
  theme: {
    // named colors:
    background: '#fff',
    borderColor: '#f0f0f0',
    brand: '#F722B1',
    brandSecondary: '#8b8f94',
    ink: '#3a5975',
    inkDark: '#35495E',
    inkLight: '#f9fbfd',
    inkSelected: '#2097e4',
    // content width:
    contentWidthLaptop: '680px',
    sitePadding: '20px'
  }
})
