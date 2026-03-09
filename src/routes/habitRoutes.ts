import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({message: 'Successfully fetched habits'})
})


router.get('/:id', (req, res) => {
  res.status(200).json({message: 'GOT 1 HABIT'})
})

router.post('/', (req, res) => {
  res.status(201).json({message: 'CREATED A HABIT'})
})

router.delete('/:id', (req, res) => {
    res.json({message: 'deleted habit'})
})

router.post('/:id/complete', (req, res) => {
    res.status(201).json({message: 'Completed A HABIT'})
  })
export default router