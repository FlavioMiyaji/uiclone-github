import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ThemeName } from '../../styles/themes';

import { Container, GithubLogo, SearchForm } from './styles';

interface IProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<IProps> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = useCallback((event: React.FormEvent) => {
    event.preventDefault();
    navigate('/' + search?.toLocaleLowerCase().trim());
  }, [search, navigate]);
  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  };
  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          placeholder="Enter Username or Repo..."
          value={search}
          onChange={event => setSearch(event.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;
