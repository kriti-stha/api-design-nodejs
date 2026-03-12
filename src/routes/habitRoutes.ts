import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.ts'
import z from 'zod'

const createSchema = z.object({
  name: z.string(),
})

const completeParamsSchema = z.object({
  id: z.string(),
})

const router = Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Successfully fetched habits' })
})

router.get('/:id', (req, res) => {
  res.status(200).json({ message: 'GOT 1 HABIT' })
})

router.post('/', validateBody(createSchema), (req, res) => {
  res.status(201).json({ message: 'CREATED A HABIT' })
})

router.delete(
  '/:id',
  validateParams(completeParamsSchema),
  validateBody(createSchema),
  (req, res) => {
    res.json({ message: 'deleted habit' })
  },
)

router.post('/:id/complete', (req, res) => {
  res.status(201).json({ message: 'Completed A HABIT' })
})
export default router
