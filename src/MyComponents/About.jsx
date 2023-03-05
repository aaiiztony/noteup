import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(NoteContext)
    useEffect(()=>{
      a.updatedState()
      // eslint-disable-next-line 
    }, [])
  return (
    <div>
      <h2>Hi, I'm {a.state.name} and I'm a {a.state.job}</h2>
    </div>
  )
}

export default About
