import React from "react";
import cancel from "../../assest/x.svg";
import wallet from "../../assest/wallet.svg";
import metamask2 from "../../assest/metamask2.svg";
import go from "../../assest/go.svg";
import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ( {handleModal, showModal} ) => {

  return (
    <div className={ (showModal)?('modal'):('modalhide')}>
      <div className="options">
        <div className="option-heading">
          <h3>Connect Wallet</h3>
          <img alt="cancel" src={cancel} onClick={handleModal} />
        </div>
        <p>Choose your preferred wallet:</p>
        <Link to="/wallet">
          <div className="options-links-container">
            <div className="options-links">
              <img alt="metamask" src={metamask2} />
              <p>Metamask</p>
            </div>
            <img alt="next" src={go} />
          </div>
        </Link>
        <div className="options-links-container">
          <div className="options-links">
            <img alt="wallet connect" src={wallet} />
            <p>WalletConnect</p>
          </div>
          <img alt="next" src={go} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
