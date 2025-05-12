import React, { useState } from 'react';
import useUserData from './useUserData';
import useRepositories from './useRepositories';

function App() {
  const [username, setUsername] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const { data: userData, error: userError, isLoading: userLoading } = useUserData(username);
  const { data: repositories, error: reposError, isLoading: reposLoading } = useRepositories(username);

  const handleSearch = () => {
    if (username) {
      setSearchHistory((prevHistory) => [...prevHistory, username]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Search GitHub user"
      />
      <button onClick={handleSearch}>Search</button>
      {userLoading ? (
        <div>Loading...</div>
      ) : userError ? (
 <div>Error: {userError.message}</div>
      ) : userData ? (
        <div>
          <h2>Profile Information</h2>
          <p>Username: {userData.login}</p>
          <p>Name: {userData.name}</p>
        </div>
      ) : null}
      {reposLoading ? (
        <div>Loading...</div>
      ) : reposError ? (
        <div>Error: {reposError.message}</div>
      ) : repositories ? (
        <div>
          <h2>Repositories</h2>
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>{repo.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div>
        <h2>Recent Search History</h2>
        <ul>
          {searchHistory.map((history, index) => (
            <li key={index}>{history}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;




