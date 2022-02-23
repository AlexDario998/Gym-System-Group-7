import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";

const BreadcrumbsComponent = (props) => {
    const breadcrumb1 = props.breadcrumb1
    const breadcrumb2 = props.breadcrumb2
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

    const breadcrumbs = [
     
      <Link to="/homeScreenSystemAdmin" underline="hover" key="1" color="inherit"  onClick={handleClick}>
        {breadcrumb1}
      </Link> 
      ,
      <Typography key="3" color="text.primary">
        {breadcrumb2}
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
