'use client'
import { Avatar, Box, Card, CardActions, CardContent, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { ArrowBack } from "@mui/icons-material";
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from "react";
function Post({res,comm}){
    const [open, setOpen] = useState(false);
    return(
        <Box
        sx={{
            width:"100%",
            height:"auto",
            padding:"20px 150px 0px 150px",
        }}>
            <Box
            sx={{
                display:"flex",
                position:"absolute",
                top:"12px",
                right:"60px",
            }}
            onClick={()=>setOpen(true)}
            >
                <IconButton>
                    <CommentIcon>
                    </CommentIcon>
                </IconButton>
            </Box>
            <Box>
            <Modal
            open={open}
            onClose={() => setOpen(false)}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,

                    }}>
                        <Typography
                        sx={{
                            display:"flex",
                            borderBottom:"1px solid grey",
                            fontSize:"25px",
                        }}>Коментарі</Typography>
                    </Box>
            </Modal>
            </Box>
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