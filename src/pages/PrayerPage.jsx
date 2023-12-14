import React from 'react'
import Header2 from '../components/Header2'
import Footer2 from '../components/Footer2'
import PrayerWallHeading from '../components/PrayerWallHeading'
import PrayerWall from '../components/PrayerWall'

const PrayerPage = () => {
  return (
    <div className="bg-brand-gray min-h-screen">
      <Header2 />
      <PrayerWallHeading />
      <PrayerWall />
      <Footer2 />
    </div>
  );
}

export default PrayerPage