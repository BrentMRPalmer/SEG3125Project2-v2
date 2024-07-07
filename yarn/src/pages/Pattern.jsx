import React from 'react'
import { useParams } from 'react-router-dom'

const Pattern = ({ patternData }) => {
    const { id } = useParams();
    const pattern = patternData.find((p) => p.id === parseInt(id));

    return (
        <div>{pattern.title}</div>
    )
}

export default Pattern