import { Profile } from "./Profile/Profile";
import user from "../../src/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "../../src/data.json";
import { FriendList } from "./Friend/FriendList/FriendList";
import friends from "../../src/friends.json";

export const App = () => {
  return (
    <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    
      <Statistics stats={data} />

      <FriendList friends={friends} />
    </>
      
  )
};

