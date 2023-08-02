import { Router } from 'express'
import CharactersController from '../controllers/characters.controller'

const router = Router()
const charactersController = new CharactersController()

router.get('/', charactersController.getCharacters)

export default router
