import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => navigate('/')}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate('/characters')}>Personajes</button>
        </li>
        <li>
          <button onClick={() => navigate('/episodes')}>Episodios</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
