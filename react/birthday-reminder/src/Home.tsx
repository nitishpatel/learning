import { Link as RouterLink, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <RouterLink to="/birthday-reminder">
        <h1>Birthday Reminder App</h1>
      </RouterLink>
    </div>
  );
};

export default Home;
