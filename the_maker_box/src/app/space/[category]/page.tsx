import React from "react";
import { items } from "./data";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";

interface Item {
  id: number;
  title: string;
  desc: string;
  image: string;
}

interface CategoryProps {
  params: {
    category: string;
  };
}

const getData = (cat: string) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category: React.FC<CategoryProps> = ({ params }) => {
  const data = getData(params.category);
  return (
    <Container>
      {/* <h1 className={styles.catTitle}>{params.category}</h1> */}

      {data.map((item: Item) => (
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            gap: "50px",
            marginTop: "50px",
            marginBottom: "100px",
          }}
          key={item.id}
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: "50px 0px" },
            }}
          >
            <Typography sx={{ fontSize: "50px", color: "white" }}>
              {item.title}
            </Typography>
            <Typography sx={{ fontSize: "20px", color: "white" }}>
              {item.desc}
            </Typography>
            {/* <Button text="See More" url="#" /> */}
          </Box>
          <Box sx={{ flex: "1", height: "70px", position: "relative" }}>
            <CardMedia
              component="img"
              height={140}
              image={item.image}
              alt="img"
            />
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Category;
