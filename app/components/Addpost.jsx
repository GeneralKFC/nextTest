'use client'
import { Box, Button, Card, CardActions, CardContent, Divider, IconButton, Snackbar, TextField, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import CheckIcon from '@mui/icons-material/Check';
function AddPosts(){
    const [inpText,setInpText]=useState('');
    const [counter,setCounter]=useState(0);
    const [check1,setCheck1]=useState(false);
    const [check2,setCheck2]=useState(false);
    const [check3,setCheck3]=useState(false);
    const [PrevRew,setPrevRew]=useState(false);
    const [DoneBar,setDonebar]=useState(false);
    const Save=()=>{
        if(inpText){
            setCounter((prev)=>prev+1);
        }
    }
    useEffect(()=>{
        if(counter===1){
            setCheck1(true);
            const Title=localStorage.setItem("Title",inpText);
            setInpText('');
        }else if(counter===2){
            setInpText('');
            setCheck2(true);
            setPrevRew(true);
            const Body=localStorage.setItem("Body",inpText);
        }else if(counter===3){
            setCheck3(true);
            
        }
        console.log(PrevRew);
    },[counter])
    const Back=()=>{
        if(counter===1){
            setCounter((prev)=>prev-1);
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            const Title=localStorage.setItem("Title",inpText);
        }else if(counter===2){
            setCounter((prev)=>prev-1);
            setCheck2(false);
            setCheck3(false);
            const Body=localStorage.setItem("Body",inpText);
        }
        
    }
    const Edit=()=>{
        setCounter(0);
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setPrevRew(false);
        setInpText('');
    }
    const SaveDone=()=>{
        setCounter(0);
        setInpText('');
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setPrevRew(false);
        setDonebar(true);
    }
return(
    <Box
    sx={{
        display:"flex",
        width:"100vw",
        height:"100%", 
        margin:"auto",
        padding:"30px 30% 0px 30%"
    }}
    >
        <Snackbar
        open={DoneBar}
        autoHideDuration={5000}
        onClose={()=>setDonebar(false)}
        message="Пост успішно створено!"
        />
        {PrevRew&&<Box sx={{
        display:"flex",
        position:"absolute",
        width:"100%",
        height:"100%",
        backgroundColor:"grey",
        opacity:0.7,
        left:"0px",
        top:"50px",

        }}></Box>}
        {PrevRew&&<Box
        sx={{
            display:"flex",
            position:"absolute",
            width:"100%",
            height:"100%",
            left:"0px",
            top:"50px",
            zIndex:"100000",
            padding:"200px 25% 0px 25%",
        }}>
        <Card sx={{
            display:"flex",
            flexDirection:"column",
            width:"100%",
            height:"300px",
            
        }}>
            <Typography
            sx={{
                display:"flex",
                padding:"10px",
                height:"50px",
                width:"100%",
                borderBottom:"1px solid grey"
            }}>Попередній перегляд</Typography>
            <Box
            sx={{
                display:"flex",
                flexDirection:"column",
                padding:"10px",
                gap:"15px",
                width:"100%",
                height:"200px",
                borderBottom:"1px solid grey"
            }}>
                <Typography
                sx={{
                    fontSize:"25px",
                }}>{localStorage.getItem("Title")}</Typography>
                <Typography>{localStorage.getItem("Body")}</Typography>
            </Box>
                <Box
                sx={{
                    width:"100%",
                    height:"50px",
                    padding:"10px",
                    justifyContent:"flex-end",
                    display:"flex",
                }}>
                    <IconButton
                    sx={{
                        color:"blue",
                        borderRadius:"5px",
                        fontSize:"16px",
                    }}
                    onClick={()=>Edit()}>
                        РЕДАГУВАТИ
                    </IconButton>
                    <IconButton
                    sx={{
                        backgroundColor:"blue",
                        color:"white",
                        borderRadius:"5px",
                        fontSize:"16px",
                    }}
                    onClick={()=>setPrevRew(false)}
                    >
                        ПІДТВЕРДИТИ
                    </IconButton>
                </Box>
        </Card>
        </Box>}


        <Card
        sx={{
           display:"flex",
           flexDirection:"column",
           padding:"15px",
           gap:"15px", 
           width:"500px",
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
                    justifyContent:"space-around",
                    alignItems:"center",
                }}>
                    <Box
                    sx={{
                        width:"30px",
                        height:"30px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"blue",
                        borderRadius:"50%",
                    }}>
                        {check1?(<CheckIcon></CheckIcon>):(<Typography
                        sx={{
                            color:"white",
                        }}>1</Typography>)}
                    </Box>
                        <Divider sx={{ 
                            borderWidth: 1, 
                            borderColor: "grey", 
                            my: 2,
                            width:"25%",

                             }}/>
                    <Box
                    sx={{
                        width:"30px",
                        height:"30px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:(check1?"blue":"grey"),
                        borderRadius:"50%",
                    }}>
                        {check2?(<CheckIcon></CheckIcon>):(<Typography
                        sx={{
                            color:"white",
                        }}>2</Typography>)}
                    </Box>
                    <Divider sx={{ borderWidth: 1, borderColor: "grey", my: 2,width:"25%" }}/>
                    <Box
                    sx={{
                        width:"30px",
                        height:"30px",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:(counter===2?"blue":"grey"),
                        borderRadius:"50%",
                    }}>
                        <Typography
                        sx={{
                            color:"white",
                        }}>3</Typography>
                    </Box>
                </Box>
                <Box
                sx={{
                    display:"flex",
                    width:"100%",
                    height:"45px",
                }}>
                   {!(check1&&check2)&&<TextField
                   sx={{
                    width:"100%",
                    '& .MuiOutlinedInput-root': {
                    height: '45px', // общая высота
                    },
                    display:"flex",
                   }}
                   label={check1?"Тіло":"Заголовок"}
                   value={inpText}
                   onChange={(e)=>setInpText(e.target.value)}
                   ></TextField> }
                </Box>
            </CardContent>
            <CardActions
            sx={{
                display:"flex",
                width:"100%",
                height:"50px",
            }}>
                <Box
                    sx={{
                        display:"flex",
                        width:"100%",
                        height:"30px",
                        justifyContent:"space-between",
                    }}>
                    <IconButton
                    sx={{
                        display:"flex",
                        fontSize:"15px",
                        borderRadius:"0px",
                    }}
                    onClick={()=>Back()}
                    >НАЗАД</IconButton>
                    <IconButton
                    sx={{
                        display:"flex",
                        borderRadius:"0px",
                        backgroundColor:"blue",
                        borderRadius:"5px",
                        gap:"10px",
                        padding:"0px 10px",
                        heigth:"20px",
                    }}
                    onClick={()=>{Save()}}
                    >
                        {check2?(<Typography onClick={()=>SaveDone()}>ПІДТВЕРДИТИ</Typography>):(<Typography
                        sx={{
                            opacity:check3?0.1:1,
                            display:"flex",
                            fontSize:"15px",
                            color:"white", 
                        }}>ДАЛІ</Typography>)}
                        <box-icon style={{color:"white", }} name='folder'></box-icon>
                    </IconButton>
                </Box>
            </CardActions>
        </Card>

    </Box>
)
}
export default AddPosts