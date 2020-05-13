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

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log("print body: ", body)
  if (!body.name) {
    return response.status(400).json({ 
      error: 'name is missing' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)
  response.json(person)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})