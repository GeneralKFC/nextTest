import { Avatar, Box, Card, CardActions, CardContent, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowBack } from "@mui/icons-material";
function Post({res}){
    return(
        <Box
        sx={{
            width:"100%",
            height:"auto",
            padding:"20px 150px 0px 150px",
        }}>

            <Card
            sx={{
                display:"flex",
                flexDirection:"column",
                gap:"15px",
                padding:"10px",
            }}>
                <CardContent
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"15px",
                }}>
                    <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:"20px",
                    }}>
                        <Avatar>{res.title.charAt(0).toUpperCase()}</Avatar>
                        <Box>
                            <Typography>User {res.userId}</Typography>
                            <Typography>{res.title}</Typography>
                        </Box>
                    </Box>
                    {res.body}
                </CardContent>

                <CardActions
                sx={{
                    display:"flex",
                    gap:"10px",
                }}
                >
                <IconButton
                    sx={{
                        width:"auto",
                        padding:"5px",
                        height:"30px",
                        bgcolor:"red",
                        gap:"20px",
                        alignItems:"center",
                        borderRadius:"5px",
                        ":hover":{
                            bgcolor:"grey",
                        }
                    }}>
                    <DeleteIcon
                    sx={{
                        display:"flex",
                        width:"20px",
                        height:"20px",
                        color:"white",
                    }}
                    ></DeleteIcon>
                    <Typography
                    sx={{
                        color:"white",
                    }}                    
                    >ВИДАЛИТИ</Typography>
                    </IconButton>   
                    <IconButton
                    sx={{
                        color:"blue",
                        border:"1px solid blue",
                        borderRadius:"5px",
                        alignItems:"center",
                        display:"flex",
                        gap:"10px",
                        width:"auto",
                        padding:"5px",
                        height:"30px",
                    }}
                    href="/allPosts/"
                    
                    >
                        <ArrowBack
                        sx={{
                            display:"flex",
                            width:"20px",
                            height:"20px",
                        }}
                        ></ArrowBack>
                        <Typography>ДО СПИСКУ</Typography>
                    </IconButton> 
                </CardActions>

            </Card>

        </Box>
    )
}
export default Post