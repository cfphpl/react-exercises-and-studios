import React from "react"

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function GiveRating (props) {
    return <h3>{stars[props.rating - 1]}</h3>;
  }

function RateARecipe(props) {
  if (!props.rating > stars.length || !props.rating < 1) {

  return GiveRating;
}
}
export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
