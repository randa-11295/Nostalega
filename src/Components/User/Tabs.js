import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PhoneIcon from "@mui/icons-material/Phone";
// import LikesCard from "../Cards/LikesCard"
import MenuCard from "../Cards/NumCard";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"

      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const myTabs = [
    { text: "قائمتي", icon: <PhoneIcon /> },
    { text: "اعجبني", icon: <PhoneIcon /> },
    { text: "مشاهداتي", icon: <PhoneIcon /> },
  ];

  const reapetTaps = () => {
    return myTabs.map((el, indx) => (
      <Tab
        label={<p style={{ margin: "10px 0" }}>{el.text}</p>}
        icon={el.icon}
        key={indx + el.text}
        iconPosition="start"
        sx={{
          color: "var(--creemy)",
          // borderColor: "secondary",
          // borderBottom: 1,
        }}
        {...a11yProps(indx)}
      />
    ));
  };

  return (
    <Box sx={{ width: "100%", }}>
      <Box>
        <Tabs
          //  orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          // variant="fullWidth"
        >
          {reapetTaps()}
        </Tabs>
      </Box>
      <TabPanel  value={value} index={0} >
        {/* <LikesCard /> */}
        <MenuCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
