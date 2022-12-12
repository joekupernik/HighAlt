import {Container } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


export default function Jumbotron (){
    return(
        <Paper
    sx={{
      bgcolor: 'secondary',
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="lg">
      <Typography
        component="h1"
        variant="h1"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Elevated Finnancals
      </Typography>
      <Typography variant="h3" align="center" color="text.secondary" paragraph>
        I started this company to help people achive their dreams. I offer several services
        each one as nessesary as the last. Contact me with your problems and I will help you find
         Solutions.
      </Typography>
      </Container>
      </Paper>
    );
}