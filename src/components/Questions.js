import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const Questions = ({id, title, info}) => {
  const [text, setText] = useState(false)

  const showAnswer = () =>{
    setText(!text)
  }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {text ? info : ''}
        </Card.Text>
        <Button variant="primary" onClick = {showAnswer}>
          {text ? "Hide Answer" : "Show Answer"}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Questions