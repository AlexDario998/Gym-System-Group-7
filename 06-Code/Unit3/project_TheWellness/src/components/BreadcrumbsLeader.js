import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";

const BreadcrumbsComponent = (props) => {
  const breadcrumb1 = props.breadcrumb1;
  const breadcrumb2 = props.breadcrumb2;
  const breadcrumb3 = props.breadcrumb3;
  const breadcrumb4 = props.breadcrumb4;
  const breadcrumb5 = props.breadcrumb5;

  const breadcrumbs = [
    <Link to="/homeScreenLeaderGym" underline="hover" key="1" color="inherit">
      {breadcrumb1}
    </Link>,
    <Typography key="3" color="text.primary">
      {breadcrumb2}
    </Typography>,
    <Link to="/menuOpt" underline="hover" key="1" color="inherit">
      {breadcrumb3}
    </Link>,
    <Link to="/OptSoli" underline="hover" key="1" color="inherit">
      {breadcrumb4}
    </Link>,
    <Typography key="3" color="text.primary">
      {breadcrumb5}
    </Typography>,
  ];

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
      }}
    >
      <Stack margin-right="100px" spacing={2} color="white">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </Box>
  );
};
export default BreadcrumbsComponent;
