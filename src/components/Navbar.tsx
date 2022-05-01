import { MenuOutlined, Search, ShoppingBagOutlined } from "@mui/icons-material"
import { Box, List, ListItem, } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/image52.png'

const Navbar = () => {
    //const listItem: string[] = ['search', 'help', 'account']
       
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "space-between",
    }}>

        <Box sx={{
            marginLeft:{md:"143px",xs:"11px"},
            marginTop: "6px",
        }}><img src={logo} alt="/" /></Box>
        
        <Box>
        <List sx={{
            display:'flex',
            marginBottom: "14px",
            textTransform: "capitalize",
            color: "white",
            fontFamily: "open sans",
            fontWeight: "400",
            fontSize: "14px",
            alignItems: "center"
        }}>
                    <ListItem sx={{marginRight:{sm:'37px',xs:'28px'}, width:{xs:'14px'}, height:{xs:'14px'}}}>
                        <Search />
                    </ListItem>
                    <ListItem sx={{ display:{xs:'none',sm:'block'},marginRight: "37px"}}>
                        Search
                    </ListItem>
                    <ListItem sx={{ display:{xs:'none',sm:'block'}, marginRight: "40px"}}>
                        Help
                    </ListItem >
                    <ListItem sx={{display:{xs:'none',sm:'flex'},marginRight: "32.4px"}}>
                       Account
                    </ListItem>
                    <ListItem sx={{marginRight:{sm:"162.9px",xs:"32px"}}}> 
                        <ShoppingBagOutlined/>
                    </ListItem>
                    <ListItem sx={{display:{xs:'block',sm:'none'},marginRight:{xs:"22px"}}}>
                        <MenuOutlined />
                    </ListItem>
           </List>
    </Box>
    </Box>
  )
}

export default Navbar