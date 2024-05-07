// Home.js
import { useOutletContext } from "react-router-dom";
import UserCard from "../components/UserCard";

function Home() {
  const users = useOutletContext();

  return (
    <main>
      <h1>Home!</h1>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </main>
  );
}

export default Home;
