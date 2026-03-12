import express from 'express'
import authRoutes from './routes/authRoutes.ts'
import userRoutes from './routes/userRoutes.ts'
import habitRoutes from './routes/habitRoutes.ts'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { isTest } from '../env.ts'

const app = express()

//global middlewares
app.use(helmet()) //for logs
app.use(cors())
app.use(express.json()) //so we get req.body
app.use(
  express.urlencoded({
    //understands how the url gets encoded and returns the appropriate content type
    extended: true,
  }),
)
app.use(
  morgan('dev', {
    skip: () => isTest(),
  }),
)

//end of global middle wares

app.get('/health', (req, res) => {
  res.json({ message: 'the app is working!' }).status(200)
})

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/habits', habitRoutes)

export { app }
export default app
