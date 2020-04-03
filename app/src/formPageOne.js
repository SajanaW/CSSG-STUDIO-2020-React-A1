import React, { useState, useEffect } from "react";
import { css } from "emotion";


const CollectionAmountForm = (props) =>  {
    return <div 
      className = {css`
        padding-left: .25rem!important;
        padding-right: .25rem!important;
        margin-bottom: .5rem!important;
        flex-basis: 67.777%;
        max-width: 67.777%;
      `}>
        <textarea
          className={css`
            box-sizing: border-box; 
            height: calc(2.75em + 1.75rem + 2px);
            padding-bottom: 1rem!important;
            padding-top: 1rem!important;
            display: block;
            width: 100%;
            padding: .375rem .75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: .25rem;
          `}
          maxLength ={6}
          value={props.otherAmount}
          id={props.id}
          onChange={(event) => props.onChange(event.target.value)}
        ></textarea>
      </div>
  }
  
  const CollectionAmountButton = (props) =>  {
    return <div 
      className = {css`
        padding-left: .25rem!important;
        padding-right: .25rem!important;
        margin-bottom: .5rem!important;
        flex-basis: 33.333%;
        max-width: 33.3333%;
      `}>
        <div
          className={css`
            background-color: #f6f6f4;
            border: none;
            color: #666;
            line-height: 1.5;
            border-radius: .5rem;
            overflow: visible;
            cursor: pointer;
            padding: 1rem .75rem;
            text-transform: uppercase;
            font-size: .85rem;
            display: block;
            font-weight: 300;
            text-align: center;
            vertical-align: middle;
            font-family: Montserrat,sans-serif;
          `}
          id = {props.id}
          onClick = {() => props.onSelect(props.id)}
        > {props.treeNum} <br/> {"  trees"} </div>
      </div>
  }
  
  
  const EnterAmountWidget = (props) =>  {
    return <div 
        className={css`
          display: flex;
          flex-direction: column;
          background-color: #fff;
        `}
      >
        <div
          className={css`
          margin-bottom: 1rem;
          font-family: Montserrat,sans-serif;
          color: #273654;
          font-size: 1rem;
          font-size: 85%;
          font-weight: 600;
          padding-top: 1.25rem;
        `}
        > 
          <div>$1 PLANTS A TREE</div>
          <div
            className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
          `}
          > 
            <img 
            className={css`
              max-width: 2.25rem;
              margin-bottom: 1rem;
              margin-top: 0.5rem;
            `}
             src="dots.svg" />
          </div>
          
        </div>
        <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
        > 
          <CollectionAmountButton onSelect={props.onSelect} id = {"formOne" + 1}treeNum={5}/>
          <CollectionAmountButton onSelect={props.onSelect}  id = {"formOne" + 2} treeNum={10}/>
          <CollectionAmountButton onSelect={props.onSelect}  id = {"formOne" + 3} treeNum={20}/>
        </div>
        <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
        > 
          <CollectionAmountButton onSelect={props.onSelect}  id = {"formOne" + 4} treeNum={50}/>
          <CollectionAmountForm  onChange={props.onChange} otherAmount={props.otherAmount} onSelect={props.onSelect}  id = {"formOne" + 0}/>
        </div>
        <div
            id = {""}
            className = {css`
            width 100%;
            color: red;
        `}> {props.err} </div>
        <div 
          className={css`
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        `}
        > 
          <div
            className={css`
            letter-spacing: 1px;
            background-color: #4b7230;
            border-color: #4b7230;
            padding: .75rem 1.5rem;
            text-transform: uppercase;
            font-size: .85rem;
            border-radius: 100rem;
            color: #fff;
            margin-top: 1rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            cursor: pointer;
          `}
          onClick={() => props.submit()}
          > NEXT</div>
        </div>
  
    </div>;
  
  }
  
  
  
  const First_Card = (props) => {
    const treeNumMapper = {
      "formOne1" : 5,
      "formOne2" : 10,
      "formOne3" : 20,
      "formOne4" : 50
    }
    const enumTrees = ["formOne0", "formOne1","formOne2","formOne3", "formOne4"]
    const [selectedButton, setSelectedButton] = useState("formOne2");
    const [numTrees, setNumTrees] = useState(10);
    const [otherAmount, setOtherAmount] = useState("Other Amount");
    const [err, setErr] = useState("");

    useEffect( () => {
      console.log(selectedButton)
      if (selectedButton === null) return;
      
      for (let t in enumTrees) {
        const elem = document.getElementById(enumTrees[t]);
        if (enumTrees[t] === "formOne0") {
          if (selectedButton != "formOne0") {
            elem.value = "Other Amount"
          }
          continue;
        }
        
        if (selectedButton === enumTrees[t]) {
          if (!elem.classList.contains("active")) {
            elem.classList.add("active");
          }
        } else if (elem.classList.contains("active")) {
          elem.classList.remove("active");
        }
      }
    });
    const onSelect = (val) => {
      setNumTrees(treeNumMapper[val]);
      setSelectedButton(val);
    }

    const onChange = (value) => {
      setSelectedButton("formOne0");
      setNumTrees(value);
      setOtherAmount(value);
    }

    const onSubmit = () => {
      if (typeof numTrees == "number") {
        //callback with number
        props.submit(numTrees);
      } else {
        setErr("Please provide a valid number");
      }

    }

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
          >JOIN #TEAMTREES. GIFT #TEAMTREES</div>
          <EnterAmountWidget submit={onSubmit} err={err} onChange={onChange} otherAmount={otherAmount} onSelect={onSelect} selectedButton={selectedButton}/>
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

  export default First_Card;
