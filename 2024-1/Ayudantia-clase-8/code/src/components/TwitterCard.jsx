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