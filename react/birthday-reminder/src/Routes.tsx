import { useRoutes } from "react-router";
import BirthdayReminder from "./birthday-reminder/BirthdayReminder";
import Home from "./Home";
import LogoOnlyLayout from "./layout/LogoLayout";
const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "birthday-reminder",
          element: <BirthdayReminder />,
        },
      ],
    },
  ]);
};
export default Router;
