import { FC } from 'react'

import CharacterCard from './components/CharacterCard'
import PlaceholderCard from './components/PlaceholderCard'
import { CharacterList } from './styled'

import { IRickAndMortyCharacter } from 'api/rest/types'

export interface ICharacterListViewProps {
  characters: IRickAndMortyCharacter[]
  isFetching: boolean
}

const CharacterListView: FC<ICharacterListViewProps> = ({ characters, isFetching }) => {
  return (
    <CharacterList>
      {characters.map((character, index) => {
        if (character) {
          return (
            <li key={character.id}>
              <CharacterCard name={character.name} imgSrc={character.image} />
            </li>
          )
        }

        // eslint-disable-next-line react/no-array-index-key
        return isFetching ? <PlaceholderCard key={index} /> : null
      })}
    </CharacterList>
  )
}

export default CharacterListView
