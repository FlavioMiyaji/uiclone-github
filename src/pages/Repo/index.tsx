import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

interface IRepoData {
  username: string;
  reponame: string;
  description?: string;
  stars: number;
  forks: number;
}

function Repo() {
  const [data, setData] = useState<IRepoData>({} as IRepoData);
  const {
    username,
    reponame,
    description,
    stars,
    forks,
  } = data;
  useEffect(() => {
    setData({
      username: 'FlavioMiyaji',
      reponame: 'FlavioMiyaji',
      description: 'Contains all my personal informations.',
      stars: 8,
      forks: 2,
    });
  }, []);
  return (
    <Container>
      <Breadcrumb>
        {!!username && (
          <>
            <RepoIcon />
            <Link to={`/${username}`} className="username">
              {username}
            </Link>
            {!!reponame && (
              <>
                <span>/</span>
                <Link to={`/${reponame}`} className="reponame">
                  {reponame}
                </Link>
              </>
            )}
          </>
        )}
      </Breadcrumb>
      {description && (<p>{description}</p>)}
      <Stats>
        <li>
          <StarIcon />
          <b>{stars}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{forks}</b>
          <span>forks</span>
        </li>
      </Stats>
      <LinkButton href={`https://github.com/${username}/${reponame}`}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;
