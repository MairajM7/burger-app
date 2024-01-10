import React from 'react'

const Meat = (props) => {
  return (
    <div>
        MEAT
        <button onClick={()=>{props.onIncrementMeat()}}>
            MORE
        </button>

        <button onClick={()=>{props.onDecrementMeat()}} disabled = {props.disabled}>
            LESS
        </button>
    </div>
  )
}

export default Meat