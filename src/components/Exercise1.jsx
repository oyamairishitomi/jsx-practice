import { users } from "../data/data";

const Exercise1 = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          {user.age >= 18 ? "（成人）" : null}
        </li>
      ))}
    </ul>
  );
};

export default Exercise1;
