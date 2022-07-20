import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const BoxStyle = {
  width: "260px",
  margin: "auto",
  
};

const containImage = {
  height: "200px",
  borderRadius: "12px",
};

export default function ShowLoader() {
  return (
    <Box sx={BoxStyle}>
      <Skeleton variant="rectangular" sx={containImage} />
      <Skeleton variant="text" sx={{ margin: "10px 0" }} />
      <Stack spacing={1} direction="row">
        <Skeleton
          variant="rectangular"
          height={35}
          width={140}
          sx={{ borderRadius: "20px" }}
        />
        <Skeleton variant="circular" height={35} width={35} />
      </Stack>
    </Box>
  );
}
