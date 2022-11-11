import React from 'react'
import './nftcard.css'
import nft1 from '../../assest/nftImages/nft1.svg'
import CardInterface from './CardInterface'

const Card = () => {
  return (
    <div>
        <CardInterface
        src = {nft1}
        />
    </div>
  )
}

export default Card