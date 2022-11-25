import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from 'dataJSON/user.json';
import data from 'dataJSON/data.json';
import GlobalStyles from './GlobalStyles';
import friends from 'dataJSON/friends.json';
import Friends from './Friends/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'dataJSON/transactions.json';

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
      <TransactionHistory items={transactions} />;
      <Friends friends={friends} />
      <Statistics title="Upload stats" stats={data} />
      <GlobalStyles />
    </div>
  );
}
