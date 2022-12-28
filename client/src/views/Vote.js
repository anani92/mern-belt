import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
const Vote = ({
  setCountryOneVotes,
  countryOneVotes,
  countryTwoVotes,
  countryThreeVotes,
  setCountryTwoVotes,
  setCountryThreeVotes,
}) => {
  let navigate = useNavigate()
  const { id } = useParams()
  const [contest, setContest] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get('http://localhost:8000/countries/' + id)

      .then((res) => {
        console.log(res.data)

        setContest(res.data.country)
        console.log(res.data.country.countryOneVotes)
        setCountryOneVotes(res.data.country.countryOneVotes)
        setCountryTwoVotes(res.data.country.countryTwoVotes)
        setCountryThreeVotes(res.data.country.countryThreeVotes)
        setLoaded(true)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleVote1 = () => {
    axios
      .put('http://localhost:8000/countries/' + id + '/edit', {
        countryOneVotes: countryOneVotes + 1,
      })
      .then((res) => console.log(res))
      .then((res) => navigate('/contests/' + id + '/result'))
      .catch((err) => console.log(err))
  }

  const handleVote2 = () => {
    axios
      .put('http://localhost:8000/countries/' + id + '/edit', {
        countryTwoVotes: countryTwoVotes + 1,
      })
      .then((res) => console.log(res))
      .then((res) => navigate('/contests/' + id + '/result'))
      .catch((err) => console.log(err))
  }

  const handleVote3 = () => {
    axios
      .put('http://localhost:8000/countries/' + id + '/edit', {
        countryThreeVotes: countryThreeVotes + 1,
      })
      .then((res) => console.log(res))
      .then((res) => navigate('/contests/' + id + '/result'))
      .catch((err) => console.log(err))
  }

  return (
    <div>
      Vote:
      {loaded && (
        <div>
          <h3>{contest.contest}?</h3>
          <div className="container">
            <h4 className="btn btn-warning m-3" onClick={handleVote1}>
              {contest.countryOne}
            </h4>
            <h4 className="btn btn-danger m-3" onClick={handleVote2}>
              {contest.countryTwo}
            </h4>
            {contest.countryThree && (
              <h4 className="btn btn-danger m-3" onClick={handleVote3}>
                {contest.countryThree}
              </h4>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Vote
