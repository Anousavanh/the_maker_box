import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import styles from "./Footer.module.css";

const Footers = [
  {
    id: 1,
    title: "MakerBox Lao",
    body: "©2023 MakerBox Lao. All rights reserved.",
  },
  {
    id: 2,
    title: "Contact Us",
    body: "Facebook: MakerBox Lao",
  },
];
const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{justifyContent: "space-between",display:"flex",color:"white"}}>
        {Footers.map((Footer) => (
          <Box key={Footer.id} >
            <Typography>{Footer.title}</Typography>
            <Typography>{Footer.body}</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Footer;
