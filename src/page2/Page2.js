import React from 'react'
import './page2.css'
import Card from '../components/nftCard/Card'
import settings from '../assest/setting.svg'

const Page2 = () => {
  return (
    <div className='page2'>
        <section className='page2-section1'>
            <h3>Resturant</h3>
            <h3>Cottage</h3>
            <h3>fantast city</h3>
            <h3>beach</h3>
            <h3>Carbins</h3>
            <h3>Off-grid</h3>
            <h3>Farm</h3>
            <div>
                <p>Location</p>
                <img alt='setting' src={settings} />
            </div>
        </section>
        <section className='page2-section2'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    </div>
  )
}

export default Page2