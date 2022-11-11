import React from "react";
import "./page1.css";
import { useState } from "react";
import landingpageImg from "../assest/landingimg.svg";
import mbtoken from "../assest/mbtoken.svg";
import metamask from "../assest/metamask.svg";
import opensea from "../assest/opensea.svg";
import Card from "../components/nftCard/Card";
import main3img from '../assest/main3img.svg'
import Modal from "../components/modal/Modal";

const Page1 = ({handleModal, showModal}) => {

  return (
    <div className="page1">
        <Modal handleModal = {handleModal} showModal={showModal}/>
      <main className="main1">
        <section className="main1-section1">
          <div>
            <p className="info1">
              Rent a <span>Place</span> away from <span>Home</span> in the{" "}
              <span>Metaverse</span>
            </p>
          </div>
          <div>
            <p className="info2">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
          </div>
          <div className="search-container">
            <input type={"text"} placeholder="Search for location" />
            <button className="search">Search</button>
          </div>
        </section>
        <section className="main1-section2">
          <img alt="nft" src={landingpageImg} />
        </section>
        <div className="banner">
          <img alt="mbtoken" src={mbtoken} />

          <img alt="metamask" src={metamask} />

          <img alt="opensea" src={opensea} />
        </div>
      </main>
      <main className="main2">
        <h1>Inspiration for your next adventure</h1>
        <main>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </main>
      <main className="main3">
        <section className="main3-section1">
            <h1>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
          <div className="learnmore-container">
            <button className="learn-more">Learn More</button>
          </div>
        </section>
        <section className="main3-section2">
          <img alt="nft" src={main3img} />
        </section>
      </main>
    </div>
  );
};

export default Page1;
