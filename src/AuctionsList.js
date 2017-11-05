import React from 'react';
import Auction from './Auction.js'

const AuctionsList = (props)=> {
  return (
  <ul>
    <Auction name={"SM Krowodrza"} />
    <Auction name={"SM Wawel"} />
  </ul>
  )
}

export default AuctionsList;
