export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
  public_repos: number;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  };
  stargazers_url: string;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}