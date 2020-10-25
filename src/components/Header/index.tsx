import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

function Header() {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter Username or Repo..." />
      </SearchForm>
    </Container>
  );
}

export default Header;
