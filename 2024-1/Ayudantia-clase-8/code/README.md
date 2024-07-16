
### Componente a utilizar

Creamos un componente reutilizable:

- Utilizamos el componente reutilizable para la card de X (Twitter), se llama `TwitterCard.jsx`. Este componente lo podemos utilizar en distintos componentes importándolo y pasándole las props necesarias.

```jsx
import { useState } from 'react'

export function TwitterCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const follow = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'button-card-twitter is-following' : 'button-card-twitter';

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='card-twitter'>
      <header className='header-card-twitter'>
        <img
          className='avatar-twitter'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='info-card-twitter'>
          <strong>{children}</strong>
          <span className='username-card-twitter'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='follow-card-twitter'>{follow}</span>
          <span className='unfollow-card-twitter'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
```

### Logica para llamar al componente

```jsx
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
```

### Resultado de lo desarrollado

![card-twitter.png](../images/card-twitter.png)