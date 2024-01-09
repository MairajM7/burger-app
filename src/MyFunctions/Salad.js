import React from 'react'

const Salad = (props) => {
  return (
    <div>
        SALAD
        <button onClick={()=>{props.onIncrementSalad()}}>
            MORE
        </button>

        <button onClick={()=>{props.onDecrementSalad()}} disabled={props.disabled}>
            LESS
        </button>
    </div>
  )
}

export default Salad