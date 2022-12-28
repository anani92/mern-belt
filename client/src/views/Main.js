import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddContest from './AddContest'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Vote from './Vote'
import Result from './Result'
const Main = () => {
  const [contests, setContests] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])
  const [countryOneVotes, setCountryOneVotes] = useState('')
  const [countryTwoVotes, setCountryTwoVotes] = useState('')
  const [countryThreeVotes, setCountryThreeVotes] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:8000/countries')

      .then((res) => {
        setContests(res.data.allCountrys)
        setLoaded(true)
        console.log(res.data.allCountrys)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div>
        <h1 className="text text-center">Countries Competetions</h1>
      </div>
      {loaded && (
        <Routes>
          <Route
            path="/"
            element={<Home contests={contests} setContests={setContests} />}
          />
          <Route
            path="/contests/new"
            element={
              <AddContest
                contests={contests}
                setContests={setContests}
                errors={errors}
                setErrors={setErrors}
              />
            }
          />
          <Route
            path="/contests/:id/vote"
            element={
              <Vote
                contests={contests}
                setContests={setContests}
                setCountryOneVotes={setCountryOneVotes}
                countryOneVotes={countryOneVotes}
                setCountryTwoVotes={setCountryTwoVotes}
                countryTwoVotes={countryTwoVotes}
                setCountryThreeVotes={setCountryThreeVotes}
                countryThreeVotes={countryThreeVotes}
              />
            }
          />
          <Route
            path="/contests/:id/result"
            element={
              <Result
                contests={contests}
                setCountryOneVotes={setCountryOneVotes}
                countryOneVotes={countryOneVotes}
                setCountryTwoVotes={setCountryTwoVotes}
                countryTwoVotes={countryTwoVotes}
                setCountryThreeVotes={setCountryThreeVotes}
                countryThreeVotes={countryThreeVotes}
              />
            }
          />
        </Routes>
      )}
    </div>
  )
}

export default Main
