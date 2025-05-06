import { Box } from "@mui/material";
import Main from "./components/main";

export default function Home() {
  return (
    <Box 
    sx={{
      display:"flex",
      width:"100%",
      height:"100%",
      alignItems:"center",
      justifyContent:"center",
    }}
    >
        <Main/>
    </Box>
  );
}
