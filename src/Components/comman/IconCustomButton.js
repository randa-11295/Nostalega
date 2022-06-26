import Tooltip from "@mui/material/Tooltip";
import BtnIconNoDesc from "./BtnIconNoDesc";

export default function IconCustomButton(props) {
  return (
    <Tooltip
      title={props.social ? false : props.title}
      placement={props.small ? "left" : "bottom"}
    >
      <BtnIconNoDesc small={props.small}> {props.children} </BtnIconNoDesc>
    </Tooltip>
  );
}
