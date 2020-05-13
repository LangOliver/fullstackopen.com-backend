const express = require('express')
const app = express()

app.use(express.json())

let persons = [
          {
            "id": 1,
            "name": "Ada Lovelaces",
            "number": "2345"
          },
          {
            "id": 2,
            "name": "Ada Lovelace",
            "number": "123"
          },
          {
            "id": 4,
            "name": "Arto Hellas",
            "number": "123"
          },
          {
            "id": 5,
            "name": "Arto Hellas",
            "number": "123123123"
          },
          {
            "id": 7,
            "name": "Ada Lovelace2",
            "number": ""
          },
          {
            "id": 9,
            "name": "Oliver",
            "number": "123"
          },
          {
            "id": 10,
            "name": "asdasdasdasd",
            "number": "123"
          },
          {
            "id": 11,
            "name": "asdasdasdas",
            "number": "123123"
          }
      
]

app.get('/info', (req, res) => {
  console.log(req.headers)
  res.send (`Phonebook has info for 
  ${persons.length} people </br> 
  ${new Date().toISOString()}`)


})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  }

  persons = persons.concat(note)

  response.json(note)
})

app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = persons.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(note => note.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})