import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Topside,
  RepoIcon,
  Botside,
  StarIcon,
  ForksIcon,
} from './styles';

interface IProps {
  username: string;
  reponame: string;
  description?: string;
  laguage?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<IProps> = (props: IProps) => {
  const {
    username,
    reponame,
    description,
    laguage,
    stars,
    forks,
  } = props;
  const laguageClass = laguage ? laguage.toLowerCase() : 'other';
  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{description}</p>
      </Topside>
      <Botside>
        <ul>
          <li>
            <div className={`language ${laguageClass}`} />
            {laguage && (<span>{laguage}</span>)}
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForksIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
}

export default RepoCard;
