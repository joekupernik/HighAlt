//import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
//import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";


export default function Jumbotron (){
    return(
        <Card className="jumbotron"
    sx={{
      bgcolor: 'secondary',
      pt: 8,
      pb: 6,
    }}
  >
   
      <Typography
        component="h1"
        variant="h1"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Front-End Engineer 
      </Typography>
      <Typography variant="h3" align="center" color="text.secondary" paragraph>
        React developer, UI/UX, Freelance Business Owner
      </Typography>
      
      </Card>
    );
}