import React, { useState } from "react";
import { Drawer,List,ListItem,ListItemText,IconButton, Menu } from "@mui/material";
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
                display:"flex",
                cursor:"pointer",
                display:"flex",
                flexDirection:"column",
            }}>
                <Link style={{
                    display:"flex",
                    textDecoration:"none",
                    color:"Black", //Swap
                    alignItems:"center",
                    justifyContent:"start"
                }} href={"/"}>
                <box-icon style={{display:"flex",justifyContent:"start"}} name='home' type='solid' ></box-icon>
                Головна
                </Link>
                <Link style={{
                    display:"flex",
                    textDecoration:"none",
                    color:"Black", //Swap
                    alignItems:"center",
                    justifyContent:"start",
                    gap:"30px"
                }} href={"/"}>
                <box-icon name='home' type='solid' ></box-icon>
                Усі пости
                </Link>
                <Link style={{
                    display:"flex",
                    textDecoration:"none",
                    color:"Black", //Swap
                    alignItems:"center",
                    justifyContent:"start",
                    gap:"30px"
                }} href={"/"}>
                <box-icon name='home' type='solid' ></box-icon>
                Створити пост
                </Link>
            </ListItem>
          </List>
        </div>

        </Drawer>
        </div>  
    )
}
export default Lside