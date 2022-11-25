import Profile from './Profile/profile';
import Statistics from './Statistics/statistics';
import user from 'dataJSON/user.json';
import data from 'dataJSON/data.json';
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <GlobalStyles />
    </div>
  );
}
