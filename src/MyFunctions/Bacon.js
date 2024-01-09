import React from 'react'

const Bacon = (props) => {
  return (
    <div>
        BACON
        <button onClick={()=>{props.onIncrementBacon()}}>
            MORE
        </button>

        <button onClick={()=>{props.onDecrementBacon()}} disabled = {props.disabled}>
            LESS
        </button>
    </div>
  )
}

export default Bacon