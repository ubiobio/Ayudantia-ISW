import './App.css'
import { TwitterCard } from './components/TwitterCard.jsx'

const usuarios = [
  {
    userName: 'Didudocl',
    name: 'Diego Salazar Jara',
    isFollowing: true
  },
  {
    userName: 'Metalcl',
    name: '~Metal.',
    isFollowing: false
  },
  {
    userName: 'PabloCastilloFer',
    name: 'Pablo Castillo Fernandez',
    isFollowing: true
  },
  {
    userName: 'Bawssy',
    name: 'Tomas Mendez',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'> 

      { 
        usuarios.map(({ userName, name, isFollowing }) => (
          <TwitterCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterCard>
        ))
      }
    </section>
  )
}