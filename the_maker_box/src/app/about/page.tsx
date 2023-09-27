import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import cover from "/public/cover.png";
import mainlogo from "public/logo.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const links = [
  {
    id: 1,
    url: "https://www.facebook.com/Laotel/",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
  {
    id: 2,
    url: "https://mmoney.la/",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
  {
    id: 3,
    url: "https://tplus.la/",
    img: "https://scontent.fvte2-1.fna.fbcdn.net/v/t39.30808-6/272124249_4787627194647546_854547299400979720_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=tIWcWGJl6HsAX_pSRJB&_nc_ht=scontent.fvte2-1.fna&oh=00_AfDlG-iyBL5JRRLDK59LLzqzx_8PEQXzOpRS2aUNn1I6iQ&oe=65051AF3",
  },
];

async function getData() {
  const res = await fetch("http://localhost:3000/api/team", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const About = async () => {
  const data = await getData();
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          height: { xs: "70px", sm: "150px", md: "200px", lg: "300px" },
          position: "relative",
        }}
      >
        <Image src={cover} alt="" />
      </Box>
      <Box sx={{ display: "Block", gap: "100px" }}>
        <Box
          sx={{
            flex: "1",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            color: "white",
            p: "0px 30px",
          }}
        >
          <Typography sx={{ fontSize: { xs: "25px", md: "30px" } }}>
            What is Makerbox Lao?
          </Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "300", textAlign: "justify" }}
          >
            Makerbox Lao is a collaborative work space for making, learning,
            exploring and sharing that uses high tech to no tech tools for kids,
            adults, and entrepreneurs.
            <br />
            <br />
            Groups and individuals can come together in one place to share their
            ideas, produce their concepts, work with marketing, legal and sales
            professionals to understand more clearly needs and ways of
            developing products and solutions in line with consumer demands.
            <br />
            <br />
            Support, mentorship, consultation and training will be available
            from industry experts, educational materials and university
            educators.
            <br />
            <br />
            Materials for the maker space and coworking areas will be provided
            at different levels
            <br />
            <br />
            Basic supplies for those people who want to play around with science
            and engineering to see how basic things work.
            <br />
            <br />
            For students who want to research what areas of science or
            technology they might want to pursue when they think of applying for
            university.
            <br />
            <br />
            Proof of concept level materials support – at this level,
            individuals or groups may present an idea that they wish to develop
            and create a prototype. For this level of materials support the
            group or individual will have to pitch their idea to a selection
            committee which will review the validity of the project and the
            potential uses and aftermarket.
            <br />
            <br />
            Production support – at this level financial and material support
            will be provided and/or sought to bring a proven product concept to
            production and eventually to the market. AT this level, funding will
            be sought to ensure the project/product/service can be fully
            realized and brought to market.
            <br />
            <br />
            The Makerbox Lao is funded by several organizations, will run as a
            not-for-profit entity, with the ultimate goal of being
            self-sustaining when ideas generated by participants in Makerbox Lao
            are launched into the market. We expect this may require up to five
            years, but if you wish to help us speed up the process, come talk to
            us.
            <br />
            <br />
          </Typography>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "30px", color: "white", p: "0px 30px" }}>
            Responsive Team
          </Typography>
          <Box
            sx={{
              display: { xs: "block", md: "flex", gap: "20px" },
            }}
          >
            {data.map((card: any) => (
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 10, md: 3 }}
                  columns={{ xs: 3, sm: 8, md: 1 }}
                  sx={{ justifyContent: "center" }}
                >
                  {Array.from(Array(1)).map((_, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                      <Card sx={{ width: "150px", height: "320px" }}>
                        <Box>
                          <Box sx={{ width: "150px", p: "10px" }}>
                            <CardMedia
                              component="img"
                              height="100"
                              image={card.img}
                              alt="green iguana"
                            />
                          </Box>
                          <CardContent>
                            <Typography
                              gutterBottom
                              fontSize={15}
                              component="div"
                            >
                              {card.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {card.position}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            flex: "1",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            color: "white",
            p: "0px 30px",
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>Support Partners</Typography>
          <Typography
            sx={{ fontSize: "16px", fontWeight: "300", textAlign: "justify" }}
          >
            The support of Lao Telecom, TPlus and M-Money is greatly appreciated
            and has allowed MBL to work towards it’s goals of creating
            opportunities for innovators of all ages to explore, experiment and
            develop their ideas into realities.
          </Typography>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: "40px",
                height: { xs: "200px", sm: "300px" },
                p: "50px 0px",
              }}
            >
              {links.map((link) => (
                <Link key={link.id} href={link.url}>
                  <Box>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 10 }}
                      columns={{ xs: 4, sm: 8, md: 10 }}
                      sx={{ justifyContent: "center" }}
                    >
                      {Array.from(Array(1)).map((_, index) => (
                        <Grid xs={5} sm={8} md={5} key={index}>
                          <CardMedia
                            component="img"
                            height={140}
                            image={link.img}
                            alt="img"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Link>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
