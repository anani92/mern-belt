import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Result = (props) => {
  const { id } = useParams()
  const [contest, setContest] = useState({})
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    axios
      .get('http://localhost:8000/countries/' + id)

      .then((res) => {
        setContest(res.data.country)
        setLoaded(true)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className="container">
      <h2 className="h2 text-primary">Result</h2>
      {loaded && (
        <div>
          <h3>{contest.contest}?</h3>
          <div className="container d-flex">
            <h4 className="btn btn-outline-primary">
              {contest.countryOne} : {contest.countryOneVotes}
            </h4>
            <h4 className=" btn btn-outline-secondary">
              {contest.countryTwo} : {contest.countryTwoVotes}
            </h4>
            {contest.countryThree && (
              <h4 className=" btn btn-outline-warning">
                {contest.countryThree} : {contest.countryThreeVotes}
              </h4>
            )}
          </div>
          <Link to="/">Back home</Link>
        </div>
      )}
    </div>
  )
}

export default Result
