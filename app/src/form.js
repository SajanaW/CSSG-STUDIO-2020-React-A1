import React, { useState } from "react";
import First_Card from "./cardOne";
import Second_Card from "./cardTwo";


const Form = (props) => {
  const [isFirstCard, setIsFirstCard] = useState(true);
  const [numTrees, setNumTrees] = useState(null);

  //TODO: Your form implementation
  return <First_Card/>;
 }

export default Form;
   