import React from 'react'
import './cardEvent.css'

export default function CardEvent({ data }) {
  return (
    <a href="#" className="card-box">
        <article>
            <h3 className="card-text">{data.name}</h3>
            <img src={data.image} className="card-img" />
            <p className="card-text">{data.category} - {data.date}</p>
            <p className="card-text">{data.assistance ? 'assistance: '+data.assistance : 'estimate: '+data.estimate}</p>
        </article>
    </a>
  )
}
