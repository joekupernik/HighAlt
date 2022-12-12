import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';




function Content() {
    return (
        <>
        <Paper>
        
            <Grid container  rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} padding={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} >
           
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
        
        </Grid>
        <Grid  item xs={12} sm={6} md={4}>
       
        </Grid>
      </Grid>
      </Paper>
      <Grid item xs={12} sm={6} md={4}>
        
      </Grid>
        </>
    );
}

export default Content;