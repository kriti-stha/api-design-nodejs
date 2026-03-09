
import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'users'})
})


router.get('/:id', (req, res) => {
  res.status(200).json({message: 'got user'})
})

router.post('/', (req, res) => {
  res.status(201).json({message: 'created user'})
})

router.delete('/:id', (req, res) => {
    res.json({message: 'deleted user'})
})

router.post('/:id/complete', (req, res) => {
    res.status(201).json({message: 'Completed a user profile'})
  })


export default router