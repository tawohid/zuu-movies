import React from 'react'
import Cast from './Cast'

const CastArray = props => {
    const cast = props.data.map( cast => <Cast cast={cast} key={cast.id}/> )

    return (
            <ul className="cast-list">
                {cast}
            </ul>
    )
}

export default CastArray