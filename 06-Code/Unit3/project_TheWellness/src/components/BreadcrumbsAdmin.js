import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import '../index.css';

const BreadcrumbsComponent = (props) => {
    const breadcrumb1 = props.breadcrumb1
    const breadcrumb2 = props.breadcrumb2


    const breadcrumbs = [
     
      <Link to="/homeScreenSuperAdmin" underline="hover" key="1" color="inherit" class = "linkBread">
        {breadcrumb1}
      </Link> 
      ,
      <Typography key="3" color="text.primary" class = "textBread">
        {breadcrumb2}
      </Typography>,
    ];

    return (
      <Box
        sx={{
          bgcolor: "#f5f5f5",
        }}
      >
        <Stack margin-right="100px" spacing={2} color="white" sx={{
          marginLeft: "2%"}}>
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
