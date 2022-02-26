
import React from 'react'
import { Card,CardGroup } from 'react-bootstrap'
import '../index.css'

function project()
{
    return (
        <div className="projects">
            <h1>My Projects</h1>
            <h5>Here are some of my Projects i worked upon</h5>
            <CardGroup>
            <Card border="info" style={{ width: '18rem' }}>
            
                <Card.Header as="h5">DICE GAME</Card.Header>
                <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    </Card.Body>
            </Card>
            <Card border="info" style={{ width: '18rem' }}>
            <Card.Header as="h5">SIMON GAME</Card.Header>
            <Card.Body>
<Card.Title>Special title treatment</Card.Title>
<Card.Text>
  With supporting text below as a natural lead-in to additional content.
</Card.Text>
</Card.Body>
            </Card>
            <Card border="info"style={{ width: '18rem' }}>
            <Card.Header as="h5">TIC-TAC-TOE GAME</Card.Header>
            <Card.Body>
<Card.Title>Special title treatment</Card.Title>
<Card.Text>
  With supporting text below as a natural lead-in to additional content.
</Card.Text>
</Card.Body>
        </Card>
        </CardGroup>
        </div>
        
    )
}
export default project;