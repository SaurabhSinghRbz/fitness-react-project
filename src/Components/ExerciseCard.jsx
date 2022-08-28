import { Link } from 'react-router-dom'
import React from 'react'

function ExerciseCard({ exercise }) {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" /></ Link>
    )
}

export default ExerciseCard