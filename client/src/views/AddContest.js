import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import CountryForm from '../components/CountryForm'
import { Button } from '@mui/material'
const AddContest = ({ contests, setContests, errors, setErrors }) => {
  let navigate = useNavigate()

  const handleCreate = async (contest) => {
    await axios
      .post('http://localhost:8000/countries/new', contest)
      .then((res) => {
        console.log(res)
        setContests([...contests, res.data])
        navigate('/')
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div className="container">
      <h2 className="text text-primary"> new Contest</h2>
      <Link to="/">
        <Button variant="outlined" color="primary">
          Home
        </Button>
      </Link>

      <CountryForm handleCreate={handleCreate} errors={errors} />
    </div>
  )
}

export default AddContest
