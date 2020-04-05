import React, { useState } from "react";
import { css } from "emotion";

const DonationDetails = (props) =>  {
    return <div>Your Donation Widget Goes here</div>
  }
  
  
  
  const Second_Card = (props) => {
    const displayNamePlaceHolder = "Display Name";
    const emailPlaceHolder = "Email";
    const messagePlaceHolder = "My #TeamTrees message is..";
    
    return <div 
      className={css`
      width: 576px;
      `
      }>
        <div
          className={css`
            display: flex;
            flex-direction: column;
          `}
          >
          <div
            className={css`
              border-radius: calc(.5rem - 1px) calc(.5rem - 1px) 0 0;
              flex-direction: column;
              color: #273654;
              background-color: #f6f6f4;
              padding: 1rem 1.25rem .8rem;
              border-bottom: 1px solid #eee;
              text-transform: uppercase!important;
              text-align: center!important;
              box-sizing: border-box;
              font-size: 1rem;
              font-weight: 600;
            `}
          >Details</div>
          {/* Hint: You'll be adding props to DonationDetails as you go!*/}
          <DonationDetails />
          <div
            className={css`
              border-radius: 0 0 calc(.5rem - 1px) calc(.5rem - 1px);
              background-color: #f6f6f4;
              border-top: 1px solid #eee;
              padding: .75rem 1.25rem;
              flex-direction: column;
              font-weight: 400;
              margin-bottom: 0!important;
              text-transform: uppercase!important;
              font-size: 70%;
              text-align: center!important;
              color: #518360;
          `}
          >FAQ</div>
        </div>
      </div>
  }

export default Second_Card;