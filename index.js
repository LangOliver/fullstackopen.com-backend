const express = require('express')
const app = express()
const logger = require('./utils/logger.js')
const config = require('./utils/config')

const cors = require('cors')

const personsRouter = require('./controllers/persons')


app.use(cors())
app.use(express.static('build'))
app.use(express.json())


// handler of requests with unknown endpoint
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }
  else if(error.name === 'ValidationError') {
    console.log('Validation error in backend: ', error.message )
    return response.status(400).json({ error: error.message})
  }

  next(error)
}

app.use('/api/persons', personsRouter)
app.use(unknownEndpoint)

app.use(errorHandler)


const PORT = config.PORT || 3001
app.listen(PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
