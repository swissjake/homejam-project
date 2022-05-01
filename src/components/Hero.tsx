import { styled, Typography } from '@mui/material'
import { Box } from '@mui/material'
import HeroLabels from './HeroLabels'
import heroImage from '../assets/Rectangle157.png'
import Navbar from './Navbar'

const Hero = () => {
  const TextContainer = styled(Typography)({
 })

 const LabelContainer = styled(Box)({
    position:"absolute",
    bottom:"0",
    left: "50%",
    transform: "translate(-50%)"
 })

  return (
    <Box>
        <Box sx={{
         backgroundImage: `linear-gradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%),url(${heroImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          //width: "1440px",
           height: '862px',
          backgroundPosition: 'center',
          position:"relative",
         }}>
           <TextContainer sx={{
             position:"absolute",
             top: "248px",
             left:{sm:"150px",xs:"16px"},
             color: "white",
           }}>
              <Typography variant='h1'  sx={{
                  width:{xs:"192px",sm:"383px"} ,
                  height:{xs:"48px",sm:"96px"},
                  fontWeight: 700,
                  fontSize:{xs:'40px', sm:'80px'},
                 fontFamily: "Libre Baskerville",
                 marginBottom: {sm:"24px", xs:"0px"}
              }}>Cari Cari</Typography>
              <Typography variant="h6" component="p"
                sx={{
                  width: {sm:"611px", xs:"331px"},
                  height:{sm:"64px", xs:"40px"},
                 color: "rgba(255, 255, 255, .6)",
                 fontFamily: "Nunito"
                }}
              >Live from their sofa to yours. Get closer to your favorite artists, and never miss out.</Typography>
           </TextContainer>

           <Navbar />
           
           <LabelContainer>
             <HeroLabels />
           </LabelContainer>
      </Box>
    </Box>
  )
}

export default Hero;

//font-family: 'Nunito', sans-serif;