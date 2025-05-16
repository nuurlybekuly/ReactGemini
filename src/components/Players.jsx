import { useState } from "react";


function Players(props){

    const {name,goals,club,country} = props

    const [goalsCount, setgoalsCount] = useState(0)

    const addGoals = () => {
        setgoalsCount(goalsCount + 1)
    }

    return(
        <>
            <div className='card'>
              <h3>{name}</h3>
              <hr />
              <p>Goals: {goalsCount}</p>
              <p>Club: {club}</p>
              <p>Country: {country}</p>
              <button onClick={addGoals}>+Goal</button>
            </div>
        </>
    );
}

export default Players;