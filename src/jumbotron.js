import Container from "@mui/material/Container";
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
        Show your Best Self
      </Typography>
      <Typography variant="h3" align="center" color="text.secondary" paragraph>
        Simply put we take your website seriously.  
      </Typography>
      </Container>
      </Paper>
    );
}