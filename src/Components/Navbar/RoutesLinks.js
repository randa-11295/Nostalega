import List from "@mui/material/List";
import { useRouter } from "next/router";
import { flexStyle } from "../../General/genralStyle";
import UserMenue from "./UserMenu";
import { useSelector } from "react-redux";
import ItemLink from "./ItemLink";

const routeData = [
  { text: "دخول", url: "/form" },
  { text: "معرض", url: "/category" },
  { text: "فيلم", url: "/media" },
  // { text: "مستخدم", url: "/user" },
];

const accountData = [
  { text: "قائمتي", url: "/form" },
  { text: "تعديل بياناتي", url: "/category" },
  { text: "تسجل خروج", url: "/media" },
  // { text: "مستخدم", url: "/user" },
];
const repeteMainLinkes = (arr, hiden) =>
  arr.map((el) => (
    <ItemLink url={el.text} text={el.text} hiden={hiden} key={el.url} />
  ));

const boxStyle = {
  padding: { xs: " 20px  10% 0", md: "0" },
  ...flexStyle(),
  flexDirection: { xs: "column", md: "row" },
  position: "reletive",
};

const RoutsLink = (props) => {
  const router = useRouter();

  const reduxState = useSelector((state) => state.isLogin);

 
  const handleClick = (url) => {
    router.push(url);
  };
  return (
    <List sx={boxStyle}>
      {repeteMainLinkes(routeData)}

      {reduxState.isLogin ? (
        <>
          <UserMenue />
          {repeteMainLinkes(accountData, true)}
        </>
      ) : (
        <ItemLink url="form" text="دخول" />
      )}
    </List>
  );
};

export default RoutsLink;
