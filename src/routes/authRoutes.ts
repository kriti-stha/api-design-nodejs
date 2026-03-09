import { Router } from 'express'

const router = Router()

router.post('/register', (req, res) => {
  res.status(201).json({message: 'Successfully signed up'})
})

router.post('/login', (req, res) => {
  res.status(200).json({message: 'Successfully logged in'})
})

export default router