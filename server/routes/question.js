import express from 'express'
import Debug from 'debug'

const debug = new Debug('platzi-overflow:root')

const app = express.Router();

const question = {
  _id: 1,
  title: '¿Como reutilizo un componente en android?',
  description: 'Miren esta es mi pregunta...',
  createdAt: new Date(),
  icon: 'devicon-android-plain',
  answers: [],
  user: {
    firstName: 'Mario',
    lastName: 'Laserna',
    email: 'm@l.com',
    password: '123456'
  }
}

const questions = new Array(10).fill(question)

// GET /api/questions
app.get('/', (req, res) => res.status(200).json(questions))

// GET /api/questions/:id
app.get('/:id', (req, res) => {
  const id = req.params.id
  const q = questions.find(question => question._id === +id)

  if (typeof q !== 'undefined') {
    res.status(200).json(q)
  }

  res.status(404).send('Not found')
})

// POST /api/questions
app.post('/', (req, res) => {
  const question = req.body
  question._id = +new Date()
  question.user = {
    firstName: 'Mario',
    lastName: 'Laserna',
    email: 'm@l.com',
    password: '123456'
  }
  question.createdAt = new Date()
  question.answers = []

  questions.push(question)

  res.status(201).json(question)
})

export default app
