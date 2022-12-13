import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
//import AppBarMenu from "./menu.js"

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="./Full Stack Resume 2022.pdf">Download Resume</a>
          </Typography>
          <Avatar alt="Joe Kupernik" src="./avitar.png"/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}