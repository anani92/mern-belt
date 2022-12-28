import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import ContestList from '../components/ContestList'

const Home = ({ contests }) => {
  const mostRecent = contests
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    .slice(0, 3)
  const topThree = contests
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })
    .sort((a, b) => a.sumVotes - b.sumVotes)
    .slice(-3)
  return (
    <div>
      <Link to="/contests/new">
        <Button>Create ur own competetion</Button>
      </Link>
      <div className="d-flex">
        <ContestList listTitle={'Top 3 competetions'} contests={topThree} />
        <ContestList listTitle={'All competetions'} contests={mostRecent} />
      </div>
    </div>
  )
}

export default Home
