import React from 'react'

const Cast = props => {

    return (
        <li className="cast-item">
                <img className="avatar" src={"http://image.tmdb.org/t/p/w132_and_h132_bestv2" + (props.cast.profile_path || "/AdoSOsacA5MquZruWeBZVgQ7fSm.jpg")} alt="no"/>

                <div className="casttitle">
                    <p className="castname">{props.cast.name}</p>
                    <p className="castcharacter">{props.cast.character}</p>
                </div>
        </li>
    )
}

export default Cast