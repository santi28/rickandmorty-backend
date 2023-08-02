import { request, gql } from 'graphql-request';

export default class CharactersService {
  public async getCharacters(page: number = 1) {
    try {
      const GET_ALL_HUMANS_CHARACTERS = gql`
        query Query {
          characters(filter: { species: "human" }, page: ${page}) {
            results {
              id
              name
              gender
              origin { name }
              image
            }
            info {
              count
              pages
              next
              prev
            }
          }
        }
      `;

      const data = await request(
        "https://rickandmortyapi.com/graphql",
        GET_ALL_HUMANS_CHARACTERS
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}
