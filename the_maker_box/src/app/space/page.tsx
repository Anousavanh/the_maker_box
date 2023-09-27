import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";

const cards = [
  {
    id: 1,
    title: "Co-Working Space",
    url: "/space/coworkingSpace",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
  {
    id: 2,
    title: "Maker Space",
    url: "/space/makerSpace",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
  {
    id: 3,
    title: "Even Space",
    url: "/space/evenSpace",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
  {
    id: 4,
    title: "Meeting Space",
    url: "/space/meetingSpace",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
  {
    id: 5,
    title: "Office Space",
    url: "/space/officeSpace",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
];

const Space = () => {
  return (
    <Container maxWidth="xl">
      <Typography sx={{ fontSize: "60px", margin: "40px 0px", color: "white" }}>
        Our Space
      </Typography>
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          gap: "40px",
          height: { xs: "auto", sm: "450px" },
          p: { xs: "50px 80px", md: "50px 0px" },
          justifyContent: "center",
        }}
      >
        {cards.map((card) => (
          <Link key={card.id} href={card.url}>
            <Box>
              <Grid
                container
                spacing={{ xs: 2, md: 10 }}
                columns={{ xs: 4, sm: 8, md: 10 }}
                sx={{ p: "20px 0px" }}
              >
                {Array.from(Array(1)).map((_, index) => (
                  <Grid xs={5} sm={8} md={5} key={index}>
                    <Box
                      sx={{
                        width: "200px",
                        border: "5px solid #bbb",
                        height: "300px",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height={140}
                        image={card.img}
                        alt="img"
                      />
                      <Typography
                        sx={{
                          textAlign: "center",
                          p: "30px 0px",
                          fontSize: "20px",
                          color: "white",
                        }}
                      >
                        {card.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
};

export default Space;
