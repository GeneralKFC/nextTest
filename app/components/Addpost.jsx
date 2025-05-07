import { Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import React from "react"

function Posts(){
return(
    <Box
    sx={{
        display:"flex",
        width:"100vw",
        height:"100%", 
        margin:"auto",
        bgcolor:"black",
    }}
    >
        <Card
        sx={{
           display:"flex",
           flexDirection:"column",
           padding:"15px",
           gap:"15px", 
           width:"100%"
        }}>
            <CardContent>
                <Box></Box>
                <Box></Box>
            </CardContent>
            <CardActions>
                <Box>
                    <IconButton>НАЗАД</IconButton>
                    <IconButton>
                        <Typography>ДАЛІ</Typography>
                    </IconButton>
                </Box>
            </CardActions>
        </Card>

    </Box>
)
}
export default Posts