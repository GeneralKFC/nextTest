"use client"

import { Box, Button, Typography,Icon } from "@mui/material"
import React from "react"

function Main(){
    return(
        <Box 
        sx={{
            padding:"20px",
            display:"flex",
            flexDirection:"column",
            background:"linear-gradient(45deg,#d2dffc 0%,#fcd2e4 100%)",
            color:"black",
            marginTop:"75px",
            gap:"40px",
            textAlign:"center",

        }}>
           <Typography 
           sx={{
            fontSize:"30px"
           }}>
            Ласкаво просимо до DOiT MVP
            </Typography> 
           <Typography
           sx={{
            fontSize:"20px"
           }}>
            Ми працюємо над MVP освітньої платформи. Приєднуйся до команди!
            </Typography> 
            <Box
            sx={{
                display:"flex",
                alignItems:"center",
                margin:"auto",
                gap:"50px",
            }}
            >
                <Button
                sx={{
                    backgroundColor:"blue",
                    color:"white",
                    alignItems:"center",
                    margin:"auto",
                    display:"flex",
                    padding:"5px 8px"
                }}>
                  <box-icon name='menu' ></box-icon>
                  <Typography>ПЕРЕГЛЯНУТИ ПОСТИ</Typography>
                </Button>
                <Button
                sx={{
                    border:"1px solid blue",
                    gap:"10px",
                    alignItems:"center",
                    justifyContent:"center",
                }}
                >
                <box-icon style={{color:"blue"}} type='solid' name='alarm-add'></box-icon>
                    <Typography>ДОДАТИ ПОСТ</Typography>
                </Button>
            </Box>
        </Box>
    )
}
export default Main