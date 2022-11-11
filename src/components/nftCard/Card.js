import React from 'react'
import './nftcard.css'
import nftimg from '../../assest/nftimg.svg'
import CardInterface from './CardInterface'

const Card = () => {
  return (
    <div>
        <CardInterface
        src = {nftimg}
        location = {'desert king'}
        amount = {'1MBT per night'}
        distance = {'2345km away'}
        availability = {'available for 2weeks stay'}
        />
    </div>
  )
}

export default Card