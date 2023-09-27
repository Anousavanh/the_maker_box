import React from "react";
import Link from "next/link";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

interface Item {
  _id: number;
  id: number;
  title: string;
  body: string;
  img: string;
}

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Moment = async () => {
  const data = await getData();

  return (
    <Container maxWidth="xl" sx={{ p: "60px" }}>
      {data.map((item: Item) => (
        <Link href={`/moments/${item._id}`} key={item.id}>
          <Box
            sx={{
              display: { xs: "Block", sm: "flex" },
              alignItems: "center",
              gap: "50px",
              marginBottom: "50px",
            }}
          >
            <Box
              sx={{
                width: { xs: "280px", sm: "400px" },
                height: "250px",
                margin: { sm: "50px" },
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="img"
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{ marginBottom: "10px", color: "white" }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: "18px", color: "white" }}>
                {item.body}
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
    </Container>
  );
};

export default Moment;
