import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import BtnIconNoDesc from "./BtnIconNoDesc";

export default function IconCustomButton(props) {
  return (
    <Tooltip
      title={props.social ? false : props.title}
      placement={!props.social ? (props.small ? "left" : "bottom") : false}
    >
      <BtnIconNoDesc>{props.children}</BtnIconNoDesc>
    </Tooltip>
  );
}
