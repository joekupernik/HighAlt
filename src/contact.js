
import Paper from "@mui/material/Paper";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function Contact () {
    return(
      <Paper>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
        <CardContent sx={{display: "flex", justifyContent: "center"}}> 
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       fontSize="1.7rem"
       >
        <h2>Contact</h2>
      <h3>Email: Joekupernik@gmail.com</h3>
      <h3>Phone: (303) 903-5160 </h3>
      <a href="https://highaltitudewebdevelopment.com/">High Altitude Web Development LLC.</a>
      </Typography>
      </CardContent>  
      </Card>
      </Paper>
    );
}