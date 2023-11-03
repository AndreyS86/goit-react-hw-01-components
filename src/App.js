import { Profile } from './components/Profile/Profile.js';
import { Statistics } from 'components/Statistics/Statistics.js';
import { FriendsList } from './components/FriendList/FriendList.js';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistiry.js';

import userData from './components/Profile/user.json';
import statsData from './components/Statistics/data.json';
import friendsData from './components/Statistics/data.json';
import transactionData from './components/TransactionHistory/transaction.json';

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendsList friends={friendsData} />
      <TransactionHistory transData={transactionData} />
    </>
  );
}
