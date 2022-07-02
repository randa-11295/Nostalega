import { Box } from "@mui/system";
import Logo from "../Text/Logo";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ContainerBox from "../HOC/ContainerBox";

const Footer = () => {
  const textStyle = {
    lineHeight: "1.5rem",
    wordSpacing: "2px",
    fontSize: ".9rem",
    margin: "20px auto 15px",
    width: "50%",
  };

  const team = [
    { name: "راندا محمد", jop: "Front end", url: "#" },
    { name: "راندا محمد", jop: "Front end", url: "#" },
    { name: "راندا محمد", jop: "Front end", url: "#" },
    { name: "راندا محمد", jop: "Front end", url: "#" },
  ];
  return (
    <Box sx={{ textAlign: "center " }} compnent="footer">
      <ContainerBox>
        <Divider sx={{ background: "var(--creemy)", marginBottom: "15px" }} />

        <Logo />
        <Typography variant="p" component="p" sx={textStyle}>
          نوستاليچيا هو اول موقع متخصص في الافلام والمسلسلات والاغاني القديمة
          قمنا بتطويره بهدف اعاده الحياة لذكريات عشنا معها لحظات سعيدة ومحاولة
          الحافظ علي تراثينا الثقافي
        </Typography>

        <Typography variant="h5" component="h5">
          {/* فريق العمل */}
        </Typography>

        <Typography variant="p" component="p" sx={textStyle}>
          Copy write @ 2022
        </Typography>
      </ContainerBox>
    </Box>
  );
};

export default Footer;
