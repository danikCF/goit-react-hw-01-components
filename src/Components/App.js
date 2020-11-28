import React from 'react'
import Profile from './Profile/Profile'
import user from '../data/user.json'
import statistics from '../data/statistical-data.json'
import Statistics from './Statistics/Statistics'
import friends from '../data/friendList.json'
import FriendList from './FriendList/FriendList'
import transactions from '../data/transactions.json'
import TransactionHistory from './Transactions/TransactionHistory'


const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={statistics} />
      {/* <Statistics stats={statistics} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
