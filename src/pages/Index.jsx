//import React from 'react';
import Footer from '../common/Footer';
import HomePage from '../components/home/HomePage';
import Blog from '../components/blog/Blog';
import TopDestination from '../components/top-destination/TopDestination';
import Travel from '../components/travel/Travel';
import SearchBar from '../components/search/SearchBar';

const Index = () => {
  return (
    <>
      <HomePage />
      <SearchBar />
      <Blog />
      <Travel />
      <TopDestination />
      <Footer />
    </>
  )
}

export default Index