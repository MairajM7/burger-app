import React from 'react'

const Cheese = (props) => {
  return (
    <div>
        CHEESE
        <button onClick={()=>{props.onIncrementCheese()}}>
            MORE
        </button>

        <button onClick={()=>{props.onDecrementCheese()}} disabled = {props.disabled}>
            LESS
        </button>
    </div>
  )
}

export default Cheese