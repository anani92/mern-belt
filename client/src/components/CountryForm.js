import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
const CountryForm = ({ errors, handleCreate }) => {
  const [contest, setContest] = useState('')
  const [countryOne, setCountryOne] = useState('')
  const [countryTwo, setCountryTwo] = useState('')
  const [countryThree, setCountryThree] = useState('')
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

  const formHandler = (e) => {
    e.preventDefault()
    setHasBeenSubmitted(true)
    handleCreate({
      contest,
      countryOne,
      countryTwo,
      countryThree,
    })
  }

  return (
    <form
      action=""
      onSubmit={formHandler}
      className="form form-group border d-flex flex-column container"
    >
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      Contest question:{' '}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        value={contest}
        onChange={(e) => setContest(e.target.value)}
      />
      {contest.length < 10 && hasBeenSubmitted ? (
        <p>question should be at least 10 charachters</p>
      ) : (
        ''
      )}
      Country One:{' '}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        value={countryOne}
        onChange={(e) => setCountryOne(e.target.value)}
        required
      />
      {!countryOne && hasBeenSubmitted ? <p>country should be present</p> : ''}
      Country Two:{' '}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        value={countryTwo}
        onChange={(e) => setCountryTwo(e.target.value)}
        required
      />
      {!countryTwo && hasBeenSubmitted ? <p>country should be present</p> : ''}
      Country Three:{' '}
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        type="text"
        value={countryThree}
        className="btn btn-block"
        onChange={(e) => setCountryThree(e.target.value)}
      />
      <Button
        variant="outlined"
        color="primary"
        disableElevation
        type="submit"
        value="Add"
      >
        Add{' '}
      </Button>
    </form>
  )
}

export default CountryForm
