"use client"
import React, { useEffect, useState } from "react";
import 'boxicons';
import { AppBar,Box, IconButton, Toolbar, Typography } from "@mui/material";
import Lside from "./Lside";
import { usePathname } from "next/navigation";
import { useThemeContext } from './ThemeContext';
import CommentIcon from '@mui/icons-material/Comment';
import { Brightness4, Brightness7 } from '@mui/icons-material';
function Header() {
    const pathname=usePathname();
    const { mode, toggleTheme } = useThemeContext();
    const getTitle = () => {
        if (pathname.startsWith('/allPosts')) return 'Усі пости';
        if (pathname === '/addPosts') return 'Створити пост';
        return 'DOiT MVP';
      };
      useEffect(()=>{
      },[pathname]);
    return (
      <AppBar 
        position="static"
        sx={{
          boxShadow: 3,
          height: '60px',
          p: '20px',
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
              p: 0, 
              minHeight: 'auto', 
              flex: 1, 
            }}
          >
            <Lside />
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
            alignItems:"center",
            justifyContent:"center",
          }}
          onClick={toggleTheme}
          >
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Box>
      </AppBar>
    );
  }
export default Header