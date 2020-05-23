const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

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


var morgan = require('morgan')

app.use(morgan('tiny'))

morgan.token('post-person', function(req, res) { 
  return (`token ${JSON.stringify(res.body)}`)
})
app.use(morgan('post-person'))

app.get('/info', (req, res) => {
  console.log(req.headers)
  res.send (`Phonebook has info for 
  ${persons.length} people </br> 
  ${new Date().toISOString()}`)
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId + 1
}
app.use(morgan('json-object'))
/* Creating a new Contact
*/
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }
  else if (body.phone === undefined) {
    return response.status(400).json({ error: 'phone missing' })
  }

  const person = new Person({
    name: body.name,
    phone: body.phone,
    id: body.id
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
  // const body = request.body
  // console.log("print body: ", body)
  // if (!body.name || !body.number) {
  //   return response.status(400).json({ 
  //     error: 'Name/Number is missing!' 
  //   })
  // }
  // else if (persons.find(person => person.name === body.name)) {
  //   return response.status(400).json({ 
  //     error: 'A person with this name already exists!' 
  //   })  }

  // const person = {
  //   name: body.name,
  //   number: body.number,
  //   id: generateId()
  // }

  // persons = persons.concat(person)
  // response.json(person)
})

app.get('/api/persons/:id', (request, response) => {
  console.log("Find by id: ", request.params.id)
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
