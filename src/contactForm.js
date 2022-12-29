import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//import Card  from '@mui/material/Card';
//import  CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function ContactForm() {
 
  
  return (
    <Paper elevation="12" sx={{m: '10%', p: '5%'}}>
    <Grid container  direction="row"
        justifyContent="center"
        alignItems="center"
      >
      <Typography variant="h2" p="3%" >Contact Form</Typography>
    <Grid item>    
    <Paper elevation={24}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80%' } 
      }}
      noValidate
      autoComplete="off"
    >
    <Grid container  direction="row"
        justifyContent="center"
        alignItems="center">
    
    <Grid item>
        <TextField
          label="First Name"
          variant="standard"
          required
          type="text"
        />
        <TextField
          label="Last Name"
          variant="standard"
          required
          type="text"
        />
      </Grid>
      <Grid item>
        <TextField
          label="Email"
          variant="standard"
          required
          type="email"
        />
        <TextField
          label="Phone Number"
          variant="standard"
          required
          type="integer"
        />
      </Grid>
      <Grid item width="80%" ml={'10%'} mt={'2%'} mb={'2%'} >
        <TextField
          label="Message"
          defaultValue="How can I help?"
          variant="outlined"
          required
          type="text"
          multiline
          rows={10}
          fullWidth
        />
        <Grid item>
       <Button size="large">Submit</Button>
       </Grid>
      </Grid>
      </Grid>
    </Box>
    </Paper>
    </Grid>
    </Grid>
    </Paper>
  );
}