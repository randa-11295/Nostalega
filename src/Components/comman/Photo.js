import Image from "next/image";
import { Box } from "@mui/material";

const containImage = {
  height: "100%",
  overflow: "hidden",
  position: "relative",
  filter: "grayscale(100%)",
};

const Photo = (props) => {
  return (
    <Box sx={containImage}>
      <Image
        layout="fill"
        objectFit="cover"
        priority
        alt={props.title || ""}
        src={props.path}
      />
    </Box>
  );
};

export default Photo;
