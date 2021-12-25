import { Picture } from '../../atoms/picture'
import { Heading } from '../../atoms/heading/heading'

import './not-found.css'

export function NotFound() {
  return (
    <section className='not-found'>
      <Picture
        alt='psyduck 404 not found'
        width={300}
        height={300}
        src='https://maurowernly.github.io/Pokedex/images/pokemons/054Psyduck.png'
      />
      <Heading type='h1'>Not Found :(</Heading>
    </section>
  )
}
