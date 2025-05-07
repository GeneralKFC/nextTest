'use client'
import { Avatar, Box, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import {  ArrowBack } from "@mui/icons-material";
import { useState } from "react";
function AllPosts({res}){
    const [inpText,setInpText]=useState('');
    const [newMass,setNewMass]=useState(res);
    useEffect(()=>{
        if(inpText!==''){
            const filter=res.filter((el)=>el.title.includes(inpText));
            setNewMass(filter);
        }else{
            setNewMass(res);
        }
    },[inpText])
    return(

        <Box
        sx={{
            width:"100vw",
            display:"flex",
            flexDirection:"column",
            padding:"20px 150px 30px 150px",
            gap:"20px",
        }}
        >
            <TextField
            value={inpText}
            onChange={(e)=>setInpText(e.target.value)}
            label="Пошук за заголовком..."
            sx={{
                width:"100%",
                height:"50px",
            }}
            />
            <Box
            sx={{
                display:"grid",
                gridTemplateColumns:"repeat(3,1fr)",
                gap:"10px",
                height:"auto",
            }}>
            {newMass.map((el)=>(
                <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    border:"1px solid grey",
                    boxShadow:"0px 1px 1px black",
                    padding:"10px",
                    height:"auto",
                    justifyContent:"space-between",
                    gap:"15px",
                }}
                key={el.id}>
                    <Box
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        gap:"15px",
                    }}
                    >
                        <Avatar>{el.title.charAt(0).toUpperCase()}</Avatar>
                        <Box>
                            <Typography
                            sx={{
                                font:"14px",
                            }}
                            >{el.title}</Typography>
                            <Box
                            sx={{
                                display:"flex",
                                gap:"10px",
                                alignItems:"center",
                            }}
                            >
                                <Typography
                                sx={{
                                    color:"grey"
                                }}
                                >
                                    User
                                </Typography>
                                {el.userId}
                            </Box>
                        </Box>
                        <IconButton color="error">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        {el.body}
                    </Box>
                    <IconButton
                    sx={{
                        display:"flex",
                        width:"45px",
                        heigth:"45px",
                        transform:"rotate(180deg)"

                    }}
                    href={`/allPosts/`+el.id}
                    >
                        <ArrowBack
                        sx={{
                            display:"flex",
                            height:"100%",
                            width:"100%",

                        }}                        
                        />
                    </IconButton>
                </Box>
            ))}
            </Box>
            <IconButton 
            href="/addPosts"
            sx={{
                display:"flex",
                position:"fixed",
                right:"25px",
                zIndex:"1000",
                bottom:"25px",
                height:"60px",
                width:"60px",
            }}
            >
            <CloseIcon
            sx={{
                height:"100%",
                width:"100%",
                backgroundColor: '#1976d2', 
                color: '#fff',
                borderRadius:"50%",
                transform:"rotate(45deg)",
            }}
            ></CloseIcon>
            </IconButton>
        </Box>  
    )
}
export default AllPosts