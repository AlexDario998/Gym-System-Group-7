import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import '../index.css';

const BreadcrumbsComponent = (props) => {
    const breadcrumb1 = props.breadcrumb1
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

    const breadcrumbs = [
      <Typography key="3" color="text.primary" class = "textBread">
        {breadcrumb1}
      </Typography>,
    ];

    return (
      <Box
        sx={{
          bgcolor: "#f5f5f5",
        }}
      >
        <Stack spacing={2} color="white" class = "bread" sx={{
          marginLeft: "2%",
        }}>
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
