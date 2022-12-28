import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
const ContestList = (props) => {
  const { contests, listTitle } = props

  return (
    <div className="container">
      <h2>{listTitle}</h2>
      {contests.map((cont, i) => (
        <div key={i}>
          <Link to={`/contests/${cont._id}/vote`}>
            {' '}
            <p>{cont.contest}?</p>
          </Link>
          <h4>
            {cont.countryOne}
            {cont.countryOneVotes} {cont.countryTwo}
            {cont.countryTwoVotes}
            <span className="float-right text text-muted h6 m-2">
              {' '}
              {moment(cont.createdAt)
                .startOf('hour')
                .fromNow()}
            </span>
          </h4>
        </div>
      ))}
    </div>
  )
}

export default ContestList
