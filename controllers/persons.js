const personsRouter = require('express').Router()
const Person = require('./../models/person')

personsRouter.get('/', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

personsRouter.get('/:id', (request, response, next) => {
  console.log('Find by id: ', request.params.id)
  Person.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
    .catch(error => {
      next(error)
    })

})
personsRouter.delete('/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

personsRouter.post('/', (request, response, next) => {
  const body = request.body
  console.log('What is request and response: ', request)
  if (!body) {
    return response.status(400).json({ error: 'no person object made it to the server' })
  }
  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }
  else if (body.number === undefined) {
    return response.status(400).json({ error: 'phone missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
    .catch(error => {
      next(error)
    })


})

personsRouter.put('/:id', (request, response, next) => {
  const body = request.body
  const contact = {
    id: body.id,
    name: body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(request.params.id, contact, {new: true})
    .then(updateContact => {
      response.json(updateContact)
    })
    .catch(error => next(error))
})

module.exports = personsRouter