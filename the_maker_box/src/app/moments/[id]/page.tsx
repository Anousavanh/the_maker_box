"use client";
import React, { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

interface PostData {
  id: number;
  title: string;
  body: string;
  username: string;
  img: string;
  content: string;
}

async function getData(id: string): Promise<PostData> {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // Throw an error for proper error handling
  }

  return res.json();
}

function MomentPost({ params }: { params: { id: string } }) {
  const [data, setData] = useState<PostData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const postData = await getData(params.id);
        setData(postData);
      } catch (error) {
        // Handle errors, e.g., show an error message or redirect to a 404 page.
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [params.id]);

  if (!data) {
    // You can return a loading indicator here
    return (
      <Container>
        <Box sx={{ textAlign: "center", p: "100px" }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: { xs: "Block", md: "flex" },
        alignItems: "center",
        marginTop: "60px",
        textAlign: { xs: "center" },
      }}
    >
      <Box>
        <Box>
          <Typography sx={{ marginBottom: "10px", color: "white" }}>
            {data.title}
          </Typography>
          <Typography sx={{ fontSize: "18px", color: "white" }}>
            {data.body}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "350px", sm: "500px" } }}>
          <CardMedia component="img" height="140" image={data.img} alt="img" />
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{ color: "white", p: { xs: "20px 0px", md: "0px 30px" } }}
        >
          {data.content}
        </Typography>
      </Box>
    </Container>
  );
}

export default MomentPost;
