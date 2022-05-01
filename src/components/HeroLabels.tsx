import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Box, Stack, styled, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroLabels = () => {

    const labelList = [
         {
            id: 1,
            icons: FavoriteBorderOutlined,
             number: 0,
             label: 'label'
         },
        {
            id: 2,
            icons: FavoriteBorderOutlined,
            number: 0,
            label: 'label'
        },
        {
            id: 3,
            icons: FavoriteBorderOutlined,
            number: 0,
            label: 'label'
        },
        {
            id: 4,
            icons: FavoriteBorderOutlined,
            number: 0,
            label: 'label'
        }
    ]

    const LabelContent = styled(Box)({
            borderRadius: "50%",
            border: "1px solid rgba(255, 255, 255, .2)",
            display: "flex",
            background:'transparent',
            justifyContent: "center",
            alignItems: "center",
            color:"white",
            flexDirection: "column"
    })

 

  return (
      <Box>
    <Stack direction="row" alignItems="center" sx={{justifyContent:{sm:"center"}, columnGap:{sm:'83px', xs:"20px", display:{sm:"none", xs:"flex"}}}}>
        <Swiper>
        {labelList.map((item: any) => ( 
            <>
                    <SwiperSlide>
                <LabelContent sx={{width:{sm:"208px", xs:"144px"},height:{sm:"208px", xs:"144px"}}} key={item.id}>
                    <item.icons sx = {{
                        width: "24px",
                        height: "26px",
                        fontWeight: "400",
                        lineHeight: "32px",
                        marginBottom: "12px",
                    }}/>
                    <Typography sx={{
                         width: "18px",
                         height: "32px",
                         fontWeight: "400",
                         fontSize: "24px",
                         lineHeight: "32px",
                         fontFamily: 'Libre Baskerville',
                    }} variant="h4" component="p">{item.number}</Typography>
                    <Typography sx={{
                        width: "39px",
                        height: "32px",
                        fontFamily: "Nunito",
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "32px",
                        color: "rgba(255, 255, 255, .5)",
                        textAlign: "center",
                    }} variant="h6" component="p">{item.label}</Typography>
                </LabelContent>
                </SwiperSlide>
            </>
        ))}
        </Swiper>
    </Stack>



<Stack direction="row" alignItems="center" sx={{justifyContent:{sm:"center"}, columnGap:{sm:'83px', xs:"20px", display:{xs:"none", sm:"flex"}}}}>
        {labelList.map((item: any) => (
            <>
                <LabelContent sx={{width:{sm:"208px", xs:"144px"},height:{sm:"208px", xs:"144px"}}} key={item.id}>
                    <item.icons sx = {{
                        width: "24px",
                        height: "26px",
                        fontWeight: "400",
                        lineHeight: "32px",
                        marginBottom: "12px",
                    }}/>
                    <Typography sx={{
                         width: "18px",
                         height: "32px",
                         fontWeight: "400",
                         fontSize: "24px",
                         lineHeight: "32px",
                         fontFamily: 'Libre Baskerville',
                    }} variant="h4" component="p">{item.number}</Typography>
                    <Typography sx={{
                        width: "39px",
                        height: "32px",
                        fontFamily: "Nunito",
                        fontWeight: "400",
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "32px",
                        color: "rgba(255, 255, 255, .5)",
                        textAlign: "center",
                    }} variant="h6" component="p">{item.label}</Typography>
                </LabelContent>
            </>
        ))}
  
    </Stack>
    </Box>
  )
}

export default HeroLabels