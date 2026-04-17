import MemberInfo from "../pages/member/MemberInfo";
import MemberJoin from "../pages/member/MemberJoin";
import MemberList from "../pages/member/MemberList";
import MemberLogin from "../pages/member/MemberLogin";
import PostInfo from "../pages/post/PostInfo";
import PostList from "../pages/post/PostList";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/members/member-list",
    element: <MemberList />
  },
  {
    path: "/members/member-info/:id",
    element: <MemberInfo />
  },
  {
    path: "/members/member-join",
    element: <MemberJoin />
  },
  {
    path: "/members/member-login",
    element: <MemberLogin />
  },
  {
    path: "/post/post-list",
    element: <PostList />
  },
  {
    path: "/post/post-info/:id",
    element: <PostInfo />
  }
])

export default router;