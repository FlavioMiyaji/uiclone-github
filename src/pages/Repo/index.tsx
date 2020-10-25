import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { APIUser, APIRepo } from '../../@types';

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
  user?: APIUser;
  repo?: APIRepo;
  error?: string;
}

function Repo() {
  const { username = 'FlavioMiyaji', reponame = 'FlavioMiyaji' } = useParams();
  const [data, setData] = useState<IRepoData>({} as IRepoData);
  useEffect(() => {
    const loadProfile = async () => {
      const loadData = async () => {
        const responses = await Promise.all([
          fetch(`http://api.github.com/users/${username}`),
          fetch(`http://api.github.com/users/${username}/repos`),
        ]);
        const [userResponse, reposResponse] = responses;
        if (userResponse.status === 404) {
          setData({ error: 'User not found!' });
          return;
        }
        const user: APIUser = await userResponse.json();
        const repos: APIRepo[] = await reposResponse.json();

        const repo = repos.find(repo => repo.name === reponame);

        setData({ user, repo });
      };
      loadData();
    }
    loadProfile();
  }, [username, reponame]);
  const { user, repo, error } = data;
  if (error) {
    return <h1>{error}</h1>;
  }
  if (!user || !repo) {
    return <h1>Carregando...</h1>;
  }
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
      {repo.description && (<p>{repo.description}</p>)}
      <Stats>
        <li>
          <StarIcon />
          {/* <b>{repo.stars}</b> */}
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{repo.forks}</b>
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
