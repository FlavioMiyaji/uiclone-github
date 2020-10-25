import React, { useEffect, useState } from 'react';

import ProfileData from '../../components/ProfileData';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
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
  return (
    <Container>
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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
