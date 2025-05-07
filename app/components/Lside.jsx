import React, { useState } from "react";
import { Drawer,List,ListItem,ListItemText,IconButton, Menu, Typography } from "@mui/material";
import 'boxicons';
import Link from "next/link";
function Lside(){
    const [isOpen,setIsOpen]=useState(false);
    const OpenDrawer=()=>{
        setIsOpen(!isOpen);
    }
    return(
        <div>
        <IconButton
        sx={{
            alignItems:"center",
        }}
        onClick={OpenDrawer}>
        <box-icon style={{color:"#fff",}} name='menu'></box-icon>
        <Menu />
        </IconButton>
        <Drawer
        PaperProps={{
            sx:{
                backgroundColor:"white", //Swap
                justifyContent:"start",
            }
        }}
        anchor="left"
        open={isOpen}
        onClose={OpenDrawer}
        >

        <div style={{ width: 250 }}>
          <List>
            <ListItem 
            sx={{
                cursor:"pointer",
                display:"flex",
                width:"100%",
                marginTop:"25px",
                gap:"20px",
                justifyContent:"space-between",
                flexDirection:"column",
            }}>
                <Link style={{
                    display:"flex",
                    textDecoration:"none",
                    color:"Black",
                    alignItems:"center",
                    width:"100%",
                    gap:"30px",
                    transition:"all 0.2s linear",
                }}
                sx={{
                    '&:hover': {
                      backgroundColor: "grey.200", // Используем цвет из палитры MUI
                    }
                  }} href="/">
                <box-icon style={{display:"flex",justifyContent:"start"}} name='home' type='solid' ></box-icon>
                <Typography>Головна</Typography>
                </Link>
                <Link style={{
                    display:"flex",
                    textDecoration:"none",
                    color:"Black", //Swap
                    alignItems:"center",
                    justifyContent:"space-detween",
                    width:"100%",
                    gap:"30px",
                }} href="/allPosts/">
                <box-icon name='home' type='solid' ></box-icon>
                <Typography>Усі пости</Typography>
                </Link>
                <Link style={{
                    display:"flex",
                    textDecoration:"none",
                    color:"Black", //Swap
                    alignItems:"center",
                    width:"100%",
                    justifyContent:"space-detween",
                    gap:"30px",
                }} href="/addPosts/">
                <box-icon name='home' type='solid' ></box-icon>
                <Typography>Створити пост</Typography>
                </Link>
            </ListItem>
          </List>
        </div>

        </Drawer>
        </div>  
    )
}
export default Lside