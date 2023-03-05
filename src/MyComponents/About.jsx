import React, { useContext } from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
    const a = useContext(noteContext)
  return (
    <div>
      <h2>Hi, I'm {a.name} and I'm a {a.job}</h2>
    </div>
  )
}

export default About
