import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from 'dataJSON/user.json';
import data from 'dataJSON/data.json';
import GlobalStyles from './GlobalStyles';
import friends from 'dataJSON/friends.json';
import FriendList from './FriendList/friendList';
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
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
      <GlobalStyles />
    </div>
  );
}
