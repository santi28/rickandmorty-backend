import { Router } from 'express'
import charactersRouter from './characters.router'

const router = Router()

router.use('/characters', charactersRouter)

export default router
