import React, { useEffect, useState } from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
  RepoIcon,
} from './styles';

interface IProfileData {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  company: string;
  location: string;
  email: string;
  blog: string;
}

const Profile: React.FC = () => {
  const [data, setData] = useState<IProfileData>({} as IProfileData);
  const {
    username,
    name,
    avatarUrl,
    followers,
    following,
    company,
    location,
    email,
    blog,
  } = data;
  useEffect(() => {
    const loadProfile = async () => {
      setData({
        name: 'Flávio Miyaji',
        username: 'FlavioMiyaji',
        avatarUrl: '',
        company: 'SHX Informática LTDA',
        followers: 10,
        following: 50,
        location: 'São Paulo, Brasil',
        email: 'yoshizo.miyaji@gmail.com',
        blog: 'flavio.miyaji.com',
      });
    }
    loadProfile();
  }, []);
  const TabContent = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={username}
            name={name}
            avatarUrl={avatarUrl}
            followers={followers}
            following={following}
            company={company}
            location={location}
            email={email}
            blog={blog}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepoCard
                  key={n}
                  username={'FlavioMiyaji'}
                  reponame={'FlavioMiyaji'}
                  description={'Contains all my personal informations.'}
                  laguage={'README.md'}
                  stars={n}
                  forks={2}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
