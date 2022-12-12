
import Typography from "@mui/material/Typography";
import Card  from "@mui/material/Card";
import  Rating  from "@mui/material/Rating";
import Avatar  from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Paper  from "@mui/material/Paper";


export default function ReviewCard() {
  return (
    <Paper>
        <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
        <Rating defaultValue={5} readOnly size="large" />
      </CardContent>
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        padding="1%"
        >
       Carly did a great job of taking care of my unique tax senario. 
       She is very communicative, and helpful. i nedd to see what happens when i write a rediculously long eview that just goes on and on and on

      </Typography>
      
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       fontSize={"1.5rem"}
       >
        - Joe 
      </Typography>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
      <Avatar alt="Joe" src="\Static\email signiture.png"
      sx={{ width: 56, height: 56}} />
      </CardContent>
      </Card>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
        <Rating defaultValue={5} readOnly size="large" />
      </CardContent>
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        padding="1%"
        >
       Carly did a great job of taking care of my unique tax senario. 
       She is very communicative, and helpful. i nedd to see what happens when i write a rediculously long eview that just goes on and on and on

      </Typography>
      
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       fontSize={"1.5rem"}
       >
        - Joe 
      </Typography>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
      <Avatar alt="Joe" src="\Static\email signiture.png"
      sx={{ width: 56, height: 56}} />
      </CardContent>
      </Card>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
        <Rating defaultValue={5} readOnly size="large" />
      </CardContent>
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        padding="1%"
        >
       Carly did a great job of taking care of my unique tax senario. 
       She is very communicative, and helpful. i nedd to see what happens when i write a rediculously long eview that just goes on and on and on

      </Typography>
      
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       fontSize={"1.5rem"}
       >
        - Joe 
      </Typography>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
      <Avatar alt="Joe" src="\Static\email signiture.png"
      sx={{ width: 56, height: 56}} />
      </CardContent>
      </Card>
      </Paper>
  );
}