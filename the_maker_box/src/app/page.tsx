import Image from "next/image";
import mainlogo from "public/logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
  {
    title: "Think it",
  },
  {
    title: "Make it",
  },
  {
    title: "Break it",
  },
  {
    title: "Rethink it",
  },
  {
    title: "Rebuild it",
  },
];
export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ height: {xs:"400px",sm:"833px"}, p: {xs:"30px 40px",sm:"200px 30px",md:"100px 100px"} }}>
      <Box sx={{display:"flex",alignItems:"center",gap:"10px",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",flexDirection:"column",gap:"20px" }} >
          {pages.map((page) => (
            <Typography
              sx={{
                background: "linear-gradient(to bottom,#03BCA3, #bbb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize:{xs:"20px",sm:"40px",md:"50px",lg:"65px"},
              }}
            >
              {page.title}
            </Typography>
          ))}
          <Box sx={{ textAlign:"center" }}>
              <Button
                size="large"
                href="about"
                sx={{
                  my: 2,
                  color: " #0EEEC4",
                  p: {xs:"0px 5px",md:"0px 20px"},
                  border: "0.5px solid #0EEEC4",
                  fontSize:{xs:"10px",sm:"14px"}
                }}
              >
                What is MakerBox Lao ?
              </Button>
            </Box>
        </Box>
        <Box sx={{ width:{xs:"170px",sm:"300px",md:"400px",lg:"500px"}}}>
          <Image src={mainlogo} alt="logo" />
        </Box>
      </Box>
    </Container>
  );
}
