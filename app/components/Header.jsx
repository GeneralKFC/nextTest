'use client'
import React, { useEffect, useState } from "react";
import 'boxicons';
import { AppBar, Box, IconButton, Toolbar, Typography, Modal } from "@mui/material";
import Lside from "./Lside";
import { usePathname } from "next/navigation";
import { useThemeContext } from './ThemeContext';
import CommentIcon from '@mui/icons-material/Comment';
import { Brightness4, Brightness7 } from '@mui/icons-material';

function Header() {
    const [showComments, setShowComments] = useState(false);
    const [openComments, setOpenComments] = useState(false);
    const [open,setOpen]=useState(false);
    const [Comments, setComments] = useState([]);
    const pathname = usePathname();
    const { mode, toggleTheme } = useThemeContext();

    const getTitle = () => {
        if (pathname.startsWith('/allPosts')){
          return 'Усі пости';
        } 
        if (pathname === '/addPosts') return 'Створити пост';
        return 'DOiT MVP';
    };

    useEffect(() => {
      const postId = pathname.split('/').pop();
      const fetchComments = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments/');
          const allComments = await response.json();

          if (postId) {
              const filteredComments = allComments.filter(item => 
                String(item.postId) === String(postId) // ← Исправлено сравнение
              );
              console.log("Фильтрованные комментарии:", filteredComments);
              setComments(filteredComments);
          }
        } catch (e) {
          console.error("Ошибка загрузки:", e);
        }
      };
  
      if (pathname.includes('/allPosts/'+postId)) {
        console.log(postId);
        setShowComments(true);
        fetchComments();
      }else{
        console.log('tyt');
        setShowComments(false);
      }
      console.log(showComments);
      console.log(openComments);
    }, [pathname,showComments,openComments]);
    const handleOpen=()=>{
      console.log('tyt');
      setOpenComments(true);
    }
    const handleClose=()=>{
      setOpenComments(false);
      console.log('tyt');
    }
    return (
        <AppBar position="static" sx={{ boxShadow: 3, height: '60px', p: '20px', alignItems: "center" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', width: '100%' }}>
                <Toolbar sx={{ alignItems: 'center', gap: '30px', p: 0, minHeight: 'auto', flex: 1 }}>
                    <Lside />
                    <Typography sx={{ fontSize: "25px" }} color="inherit">
                        {getTitle()}
                    </Typography>
                </Toolbar>

                <IconButton sx={{ height: "30px", width: "30px" }} onClick={toggleTheme}>
                    {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                </IconButton>

                      {showComments&&<IconButton onClick={handleOpen} sx={{display: "flex", position: "absolute", top: "12px", right: "60px" }}>
                          <CommentIcon></CommentIcon>
                      </IconButton>}


                {openComments&&<Modal open={openComments} onClose={handleClose}>
                    <Box onClick={handleClose}  sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: 400,
                        maxHeight:"700px",
                        overflow:"scroll",
                        bgcolor: 'background.paper',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}>
                      <Typography sx={{ display: "flex", borderBottom: "1px solid grey", fontSize: "25px" }}>
                            Коментарі
                        </Typography>
                        {Comments.map((item) => (
                        <Box key={item.id} sx={{ mt: 2 }}>
                        <Typography fontWeight="bold">{item.name}</Typography>
                        <Typography>{item.body}</Typography>
                        </Box>
                        ))}
                    </Box>
                </Modal>}
            </Box>
        </AppBar>
    );
}

export default Header;