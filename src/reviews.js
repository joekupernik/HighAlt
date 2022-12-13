
import Typography from "@mui/material/Typography";
import Card  from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Paper  from "@mui/material/Paper";
//import Button from "@mui/material/Button";

export default function ReviewCard() {
  return (
    <Paper>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
      </CardContent>
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        padding="1%"
        fontSize="1.5rem"
        >
       Joseph is a highly motivated and persistent engineer with a growing portfolio of excellent work. He is a capable engineer, good communicator and hard worker. He would be a great addition to any team looking for an engineer who is dedicated to producing quality work, will work hard and deliver.
      </Typography>
      
      
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       fontSize={"1.7rem"}
       >
        <p> - Nancy Felix </p>
        <a href="https://www.linkedin.com/in/nancyfelix123/"> Sr Leader, Software Development - Amazon Devices </a>
      </Typography>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
      </CardContent>
      </Card>
      <Card variant="outlined" sx={{mt: 2, mb: 2}}>
          <CardContent sx={{display: "flex", justifyContent: "center"}}>
      </CardContent>
      <Typography  
        component="body"
        align="center"
        color="text.primary"
        padding="1%"
        fontSize="1.5rem"
        >
       Joe is a dedicated and persistent front end engineer. He is well versed in react and JavaScript as well as CSS and the frameworks Material UI and bootstrap. We have worked on several projects together and Joe's communication was clear and easy to understand. I would recommend Joe for any position where clear and effective communication and technical skills are required.
      </Typography>
      
      <Typography 
       component="body"
       align="center"
       color="text.primary"
       fontSize="1.7rem"
       >
        <p> - Ben Kupernik </p>
        <a href="https://www.linkedin.com/in/nancyfelix123/"> Scientific Software Engineer - Geomega </a>
      </Typography>
      <CardContent sx={{display: "flex", justifyContent: "center"}}>
      </CardContent>
      </Card>
      </Paper>
  );
}