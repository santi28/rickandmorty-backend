import { type Request, type Response } from 'express'
import CharactersService from '../services/characters.service'

const charactersService = new CharactersService()

export default class CharactersController {
  public async getCharacters (req: Request, res: Response): Promise<void> {
    const { page } = req.query

    try {
      // Comprobamos que el parámetro page sea un número
      if (isNaN(Number(page))) {
        res.status(400).json({ message: 'Bad Request', kind: 'Page must be a number' })
      }

      // Obtenemos todos los personajes humanos de la página indicada
      const humanCharacters = await charactersService.getCharacters(Number(page))
      res.status(200).json(humanCharacters)
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
}
