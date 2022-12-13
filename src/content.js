import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box'





function Content() {
    return (
        <Box sx={{mt: '2%', mb: '2%'}}>
        <Grid container  direction="row"
        justifyContent="space-evenly"
        alignItems="center">
        
        <Grid item >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./react.png"
        alt="react logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is my favorite framework for app development. In fact this website is built on react. 
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://github.com/joekupernik/highalt"> Veiw Source Code</a>
      </CardActions>
    </Card>
        </Grid>
        <Grid  item >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./typescript.png"
        alt="Typescript"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Typescript
        </Typography>
        <Typography variant="body2" color="text.secondary">
           Typescript is great! Check out this project where I use typescript to build a website. 
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://github.com/joekupernik/Tax-Time">Veiw Source Code</a>
      </CardActions>
    </Card>
        </Grid>
        <Grid  item >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./mui.png"
        alt="Material UI"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Material UI
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Material UI is a great framework. I use this more than any other framework for css. 
        </Typography>
      </CardContent>
      <CardActions>
        <a href="https://github.com/joekupernik/highalt"> Veiw Source Code</a>
      </CardActions>
    </Card>
        </Grid>
        <Grid  item >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="100%"
        image="./javascript.png"
        alt="JavaScript"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        JavaScript
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The mother of frontend development.  I use this every day. please take a look at this project showcasing an API pull and some higher order JavaScript functions. 
        </Typography>
      </CardContent>
      <CardActions>
      <a href="https://github.com/joekupernik/ITuneTop100"> Veiw Source Code</a>
      </CardActions>
    </Card>
        </Grid>
      </Grid>
      </Box>
    );
}

export default Content;