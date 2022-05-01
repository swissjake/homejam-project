import { ArrowRightAltOutlined, Feed } from '@mui/icons-material'
import { Box, Link, Stack, Typography } from '@mui/material'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const UpcomingShows = () => {

 type UpcomingList = {
     id: number,
    nolly: string,
     title: string,
     image: string
 }[]

    const upcomingList: UpcomingList = [
        {
            id: 1,
            image: img1,
            nolly: "Folk",
            title: "Benny Dayal",
        },
        {
            id: 2,
            image: img2,
            nolly: "Bollywood",
            title: "Vijay Yesudas",
        },
        {
            id: 2,
            image: img3,
            nolly: "Folk",
            title: "Andrea Jeremiah",
        },
        {
            id: 2,
            image: img4,
            nolly: "Folk",
            title: "Shilpa Rao",
        }
    ]
  return (

    // Section Wrapper

    <Box sx={{
        paddingLeft: {sm:"154px", xs:"16px"},
        paddingRight: {sm:"146px",xs:"16px"},
        paddingTop: {sm:"126px",xs:"102px"},
    }}>


        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center"
            }}>
            

            {/* Upcoimg shows and View all Wrapper */}

        <Box>
        <Typography sx={{
            fontSize: {sm:"32px", xs:"20px"},
            color: "white",
            fontWeight: "400",
            width: {sm:"287px",xs:"179"},
            height: {sm:"48px",xs:"24px"},
            lineHeight:{sm:"40px",xs:"24px"},
            fontFamily: 'Libre Baskerville'
        }} 
        variant="h2">Upcoming Shows</Typography>
        <Box sx={{width: "48px", height: "3px",backgroundColor: "#0259EB", borderBorder:"16px", marginTop:"8px"}}></Box>
        </Box>
        <Typography sx={{
            color: "#E5C558",
            width: {sm:"62px", xs:"54"},
            height: "24px",
            fontWeight: "600",
            fontSize: {sm:"16px", xs:"14px"},
            fontFamily: "nunito",
            whiteSpace: "nowrap",
            paddingRight: {sm:"20px",xs:"10px"}
        }} 
        variant="h5" component="p">View All</Typography>
        </Box>


            {/* Upcoming shows cards */}

            {/* Responsive Slider on mobile device */}
        <Stack direction="row" spacing="16px" mt="42px" justifyContent="center" sx={{display:{xs:'flex', sm:"none"},columnGap:{sm:"16px",xs:"0"}}}>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
            >
           {upcomingList.map((list) => (
               <SwiperSlide>
               <Box key={list.id} sx={{
                   width: "268px",
                   height: "387px",
                   backgroundColor: "hsla(257, 60%, 25%, 1)",
                    position: "relative",
                    
                }}
                >

                    {/* Box on top */}

                <Box sx={{right:"8px",left:"",top:"8px", bottom:"0", backgroundColor:"#111229", position:"absolute", width:"268px", height: "387px", boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",borderRadius: "8px"}}>
                    <img src={list.image} alt="/" />
                    <Box sx={{padding:"25px 16px"}}>
                        <Box sx={{
                            backgroundColor: "rgba(229, 197, 88, 1)",
                            display: "inline",
                            padding: "2px 6px",
                            fontFamily: "nunito",
                            fontSize: "12px"
                            }}>
                        {list.nolly}
                        </Box>
                   
                    <Typography sx=
                    {{fontSize: {sm:"20px", xs:"18px"},
                     fontWeight:"700",
                     width: {sm:"141px", xs:"121px"},
                     height: "32px",
                     whiteSpace:"nowrap",
                     color: "#FFFFFF",
                     marginTop: "8px",
                     fontFamily: "libre baskeville"
                     }} variant="h2" component="p">
                         {list.title}
                    </Typography>

                            {/* More Info and Icons */}
                        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <Box sx={{display:"flex", alignItems:"center", marginTop: "16px", color:"rgba(2, 89, 235, 1)",}}>
                                <Link sx={{marginRight:"26.25px", textDecoration:"none", fontSize: "16px", fontWeight:"600",fontFamily:"nunito"}} href="/">More Info</Link>
                                 <ArrowRightAltOutlined />
                            </Box>
                            <Box sx={{display:"flex", alignItems:"center", marginTop:"3px"}}>
                                <Box sx={{width:"1px", height:"32px", marginRight:"23px", backgroundColor: "rgba(255, 255, 255, .1)"}}></Box>
                                <Feed sx={{border: "1px solid rgba(255, 255, 255, 1)"}}/>
                            </Box>
                        </Box>
                      </Box>
                </Box>
             </Box>
             </SwiperSlide>
        ))};

         </Swiper>
        </Stack>


                             {/* Upcoming shows cards */}
        <Stack direction="row" spacing="16px" mt="42px" justifyContent="center" sx={{display:{xs:'none', sm:"flex"}}}>
           {upcomingList.map((list) => (
          
               <Box key={list.id} sx={{
                   width: "268px",
                   height: "387px",
                   backgroundColor: "hsla(257, 60%, 25%, 1)",
                    position: "relative",
                    
                }}
                >

                    {/* Box on top */}

                <Box sx={{right:"8px",left:"",top:"8px", bottom:"0", backgroundColor:"#111229", position:"absolute", width:"268px", height: "387px", boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.25)",borderRadius: "8px"}}>
                    <img src={list.image} alt="/" />
                    <Box sx={{padding:"25px 16px"}}>
                        <Box sx={{
                            backgroundColor: "rgba(229, 197, 88, 1)",
                            display: "inline",
                            padding: "2px 6px",
                            fontFamily: "nunito",
                            fontSize: "12px"
                            }}>
                        {list.nolly}
                        </Box>
                   
                    <Typography sx=
                    {{fontSize: {sm:"20px", xs:"18px"},
                     fontWeight:"700",
                     width: {sm:"141px", xs:"121px"},
                     height: "32px",
                     whiteSpace:"nowrap",
                     color: "#FFFFFF",
                     marginTop: "8px",
                     fontFamily: "libre baskeville"
                     }} variant="h2" component="p">
                         {list.title}
                    </Typography>

                            {/* More Info and Icons */}
                        <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                            <Box sx={{display:"flex", alignItems:"center", marginTop: "16px", color:"rgba(2, 89, 235, 1)",}}>
                                <Link sx={{marginRight:"26.25px", textDecoration:"none", fontSize: "16px", fontWeight:"600",fontFamily:"nunito"}} href="/">More Info</Link>
                                 <ArrowRightAltOutlined />
                            </Box>
                            <Box sx={{display:"flex", alignItems:"center", marginTop:"3px"}}>
                                <Box sx={{width:"1px", height:"32px", marginRight:"23px", backgroundColor: "rgba(255, 255, 255, .1)"}}></Box>
                                <Feed sx={{border: "1px solid rgba(255, 255, 255, 1)"}}/>
                            </Box>
                        </Box>
                      </Box>
                </Box>
             </Box>
         
        ))};
        </Stack>
       
    </Box>
  )
}

export default UpcomingShows


//#E5C558