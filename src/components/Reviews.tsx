
import { ArrowBackOutlined, ArrowForwardOutlined, } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import usaimage from '../assets/flagUsa.png'
import italyflag from '../assets/italyflag.png'
import reviewImage1 from '../assets/reviewImage1.png'
import reviewImage2 from '../assets/reviewImage2.png'
import reviewImage3 from '../assets/reviewImage3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Reviews = () => {
    type ReviewList = {
        id: number,
       country: string,
        name: string,
        flag: string,
        reviews: string,
        reviewImage: string
    }[]
   
       const reviewList: ReviewList = [
           {
               id: 1,
               reviewImage: reviewImage1,
               flag: usaimage,
               country: "Palo Alto, CA",
               name: "Hellen Jummy",
               reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
           },
           {
               id: 2,
               reviewImage: reviewImage2,
               flag: italyflag,
               country: "Palo Alto, CA",
               name: "Isaac Oluwatemilorun",
               reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
           },
           {
               id: 3,
               reviewImage: reviewImage3,
               flag: usaimage,
               country: "Palo Alto, CA",
               name: "Hellen Jummy",
               reviews: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing."
           },
       ]

  return (
    <Box  sx={{
        paddingLeft: {sm:"154px", xs:"16px"},
        paddingRight: {sm:"146px",xs:"16px"},
        paddingTop: {sm:"126px",xs:"102px"},
        marginBottom: "154px"
            }}>

<Box sx={{
            display: "flex",
            justifyContent: "space-between"
            }}>
            

            {/* Reviews Heading and Arrows Wrapper */}

        <Box>
        <Typography sx={{
            fontSize: {sm:"32px", xs:"20px"},
            color: "white",
            fontWeight: "400",
            width: {xs:"84px",sm:"287px"},
            height: {xs:"24px",sm:"48px"},
            lineHeight:"40px",
            fontFamily: 'Libre Baskerville'
        }} 
        variant="h2">Reviews</Typography>
        <Box sx={{width: "48px", height: "3px",backgroundColor: "#0259EB", borderBorder:"16px", marginTop:"8px"}}></Box>
        </Box>
        <Box sx={{display:{sm:"flex",xs:"none"}, alignItems:"center"}}>
        <Typography sx={{
            color: "rgba(255, 255, 255, .5)",
            width: "62px",
            height: "24px",
            fontWeight: "600",
            fontSize: "16px",
            fontFamily: "nunito",
            whiteSpace: "nowrap"
        }} 
        variant="h5" component="p"><span style={{color: "rgba(255, 255, 255, .8"}}>1</span>/12</Typography>
        <Box sx={{display: "flex", color:"rgba(255, 255, 255, .8)"}}>
        <ArrowBackOutlined sx={{marginRight: "21px"}}/>
        <ArrowForwardOutlined />
        </Box>
        </Box>
        </Box>

        {/* Review Cards Goes here  */}
      
        {/* Responsive Slider for Mobile Device only */}
        <Stack direction="row" marginTop="41px" spacing="18px" sx={{justifyContent:{sm:'center'}, display:{xs:'flex', sm:"none"}}}>
            
        <Swiper
            slidesPerView={1}
            breakpoints={{
                640:{
                    slidesPerView:2
            },
        }}
        >
            {reviewList.map((review) => (
                    <SwiperSlide>
                 <Box sx={{width:{sm:"368px",xs:"328px"}, height:{xs:"232px",sm:"248px"}, backgroundColor:"rgba(39, 108, 115, 1)", position:"relative", borderRadius:"16px"}}>

                    
                    {/* The Box on top */}
                    <Box sx={{width:{sm:"368px", xs:"328px"}, height:{sm:"248px",xs:"232px"},right:"8px",left:"",top:"8px", bottom:"0", backgroundColor:"#0A0B1A", position:"absolute",boxSizing:"border-box",borderRadius: "16px", border:"2px solid #E5AF56", padding:"35px 24px"}}>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <img src={review.reviewImage} alt="/" />
                            <Box sx={{marginLeft:"16.57px"}}>
                                <Typography sx={{
                                    color: "white",
                                    fontSize:"16px",
                                    fontWeight:"700",
                                    fontFamily:"Quattrocento"
                                }} 
                                variant="h6" component="p">{review.name}
                                </Typography>


                                <Box sx={{display:"flex", alignItems:"center"}}>
                                     <img style={{width: "24px", height:"24px"}} src={review.flag} alt="/" />
                                     <Typography sx={{
                                         fontSize: "11px",
                                         textTransform:"uppercase",
                                         fontFamily:"nunito",
                                         fontWeight: "600",
                                         color: "#E5C558",
                                         width: "80px",
                                         marginLeft: "8px",
                                         whiteSpace: "nowrap",
                                         height: "16px"
                                     }} variant="h6" component="p">{review.country}</Typography>
                                </Box>
                            {/* <Typography variant="h6" component="p">{review.reviews}</Typography> */}
                            </Box>
                          
                        </Box>
                        <Typography sx={{
                            fontFamily: "nunito",
                            fontSize: "16px",
                            fontWeight:"400",
                            color: "rgba(255, 255, 255, .9)",
                            marginTop: "23.31px"
                        }} variant="h6" component="p">{review.reviews}</Typography>
                    </Box>
                </Box>
                
                </SwiperSlide>
            ))}
           </Swiper>
        </Stack>
        


                             {/* Review Cards Goes here  */}
      

        <Stack direction="row" marginTop="41px" spacing="18px" sx={{justifyContent:{sm:'center'}, display:{xs:'none', sm:"flex"}}}>
            
            {reviewList.map((review) => (
                 <Box sx={{width:{sm:"368px",xs:"328px"}, height:{xs:"232px",sm:"248px"}, backgroundColor:"rgba(39, 108, 115, 1)", position:"relative", borderRadius:"16px"}}>

                    
                    {/* The Box on top */}
                    <Box sx={{width:{sm:"368px", xs:"328px"}, height:{sm:"248px",xs:"232px"},right:"8px",left:"",top:"8px", bottom:"0", backgroundColor:"#0A0B1A", position:"absolute",boxSizing:"border-box",borderRadius: "16px", border:"2px solid #E5AF56", padding:"35px 24px"}}>
                        <Box sx={{display:"flex", alignItems:"center"}}>
                            <img src={review.reviewImage} alt="/" />
                            <Box sx={{marginLeft:"16.57px"}}>
                                <Typography sx={{
                                    color: "white",
                                    fontSize:"16px",
                                    fontWeight:"700",
                                    fontFamily:"Quattrocento"
                                }} 
                                variant="h6" component="p">{review.name}
                                </Typography>


                                <Box sx={{display:"flex", alignItems:"center"}}>
                                     <img style={{width: "24px", height:"24px"}} src={review.flag} alt="/" />
                                     <Typography sx={{
                                         fontSize: "11px",
                                         textTransform:"uppercase",
                                         fontFamily:"nunito",
                                         fontWeight: "600",
                                         color: "#E5C558",
                                         width: "80px",
                                         marginLeft: "8px",
                                         whiteSpace: "nowrap",
                                         height: "16px"
                                     }} variant="h6" component="p">{review.country}</Typography>
                                </Box>
                            {/* <Typography variant="h6" component="p">{review.reviews}</Typography> */}
                            </Box>
                          
                        </Box>
                        <Typography sx={{
                            fontFamily: "nunito",
                            fontSize: "16px",
                            fontWeight:"400",
                            color: "rgba(255, 255, 255, .9)",
                            marginTop: "23.31px"
                        }} variant="h6" component="p">{review.reviews}</Typography>
                    </Box>
                </Box>
                

            ))}
          
        </Stack>
    </Box>
  )
}

export default Reviews