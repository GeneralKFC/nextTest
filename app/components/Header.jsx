'use client'
import React, { useEffect, useState} from "react";
import 'boxicons';
import { AppBar,Box, IconButton, Toolbar, Typography, Modal } from "@mui/material";
import Lside from "./Lside";
import { usePathname } from "next/navigation";
import { useThemeContext } from './ThemeContext';
import CommentIcon from '@mui/icons-material/Comment';
import { Brightness4, Brightness7 } from '@mui/icons-material';
function Header({comm}) {
    const [showComments,setShowComments]=useState(false);
    const [openComments,setOpenComments]=useState(false);
    const [Comments,setComments]=useState([]);
    const pathname=usePathname();
    const { mode, toggleTheme } = useThemeContext();
    const getTitle = () => {
        if (pathname.startsWith('/allPosts')) return 'Усі пости';
        if (pathname === '/addPosts') return 'Створити пост';
        return 'DOiT MVP';
      };
      useEffect(()=>{
        if (pathname.includes('/allPosts/')) {
          setShowComments(true);
        } else {
          setShowComments(false);
        }
      },[pathname]);
      console.log(comm);
      useEffect(()=>{
        if(showComments&&comm){
          const Last = pathname.split('/').pop(); 
          console.log("Last post ID:", Last);
          const filter=comm.filter((item)=>String(item.postId)===Last);
          console.log("Filtered comments:", filter);
          setComments(filter);
        }
      },[showComments,comm,pathname]);
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
          {showComments&&<Box
            sx={{
                display:"flex",
                position:"absolute",
                top:"12px",
                right:"60px",
            }}
            onClick={()=>setOpenComments(true)}
            >
                <IconButton>
                    <CommentIcon>
                    </CommentIcon>
                </IconButton>
            </Box>}
          {<Box>
            {openComments&&<Modal
            open={openComments}
            onClose={()=>setOpenComments(false)}
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
                        {Comments.map((item)=>
                        <Box key={item.id}>
                          <Typography>{item.name}waeagers</Typography>
                          <Typography>{item.body}</Typography>
                        </Box>)}
                    </Box>
            </Modal>}
            </Box>}
        </Box>
      </AppBar>
    );
  }
export default Header