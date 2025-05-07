"use client"
import React from "react";
import 'boxicons';
import { AppBar,Box, IconButton, Toolbar, Typography } from "@mui/material";
import Lside from "./Lside";
import { usePathname } from "next/navigation";
function Header() {
    const pathname=usePathname();
    const getTitle = () => {
        if (pathname.startsWith('/allPosts')) return 'Усі пости';
        if (pathname === '/addPosts') return 'Створити пост';
        return 'DOiT MVP';
      };
    return (
      <AppBar 
        position="static"
        sx={{
          boxShadow: 3,
          height: '60px',
          p: '10px',
          alignItems:"center",

        }}
      >
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            alignItems:"center",
          }}
        >
          <Toolbar 
            sx={{
              alignItems: 'center',
              gap: '30px',
              p: 0, // Убираем стандартные отступы Toolbar
              minHeight: 'auto', // Отключаем минимальную высоту
              flex: 1, // Занимает доступное пространство
            }}
          >
            <Lside/>
            <Typography 
            sx={{
                fontSize:"25px",
            }}
            color="inherit">
              {getTitle()}
            </Typography>
          </Toolbar>
          
          <IconButton 
          sx={{
            height:"30px",
            width:"30px",
            bgcolor:"red",
          }}>
            
          </IconButton>
        </Box>
      </AppBar>
    );
  }
export default Header