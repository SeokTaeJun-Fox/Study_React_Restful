import MemberInfo from "../pages/member/MemberInfo";
import MemberList from "../pages/member/MemberList";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  {
    path: "/members/member-info",
    element: <MemberInfo />
  }
])

export default router;