import List from "@mui/material/List";
import UserMenue from "./UserMenu";
import ItemLink from "./ItemLink";
import { useRouter } from "next/router";
import { flexStyle } from "../../General/genralStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  logOutHandel,
  checkIsLog,
} from "../../Redux/sliceReducers/rejesterSlice";
import { useEffect } from "react";

const routeData = [
  { text: "دخول", url: "/form" },
  { text: "معرض", url: "/shows" },
];

const accountData = [
  { text: "قائمتي", url: "/form" },
  { text: "تعديل بياناتي", url: "/category" },
  { text: "تسجل خروج", url: "/media" },
];

const boxStyle = {
  padding: { xs: " 20px  10% 0", md: "0" },
  ...flexStyle(),
  flexDirection: { xs: "column", md: "row" },
  position: "reletive",
};

const RoutsLink = (props) => {
  const router = useRouter();

  const reduxState = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    const isLoged = Boolean(window.localStorage.getItem("Token"));
    dispatch(checkIsLog(isLoged));
  }, []);

  const logOutFun = () => {
    dispatch(logOutHandel());
    routeChangeHandel("/form");
  };

  const routeChangeHandel = (url) => {
    router.push(url);
  };

  const repeteMainLinkes = (arr, hidden) =>
    arr.map((el) => (
      <ItemLink
        fun={routeChangeHandel}
        url={el.url}
        text={el.text}
        hiden={hidden}
        key={el.url}
      />
    ));

  return (
    <List sx={boxStyle}>
      {repeteMainLinkes(routeData)}

      {reduxState.isLogin ? (
        <>
          <UserMenue logOutFun={logOutFun} />
          {repeteMainLinkes(accountData, true)}
        </>
      ) : (
        <ItemLink url="form" text="دخول" fun={routeChangeHandel} />
      )}
    </List>
  );
};

export default RoutsLink;
