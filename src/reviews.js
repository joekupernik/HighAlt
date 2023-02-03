
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: '- Nancy Felix - Sr Leader, Software Development - Amazon Devices',
    description: `Joseph is a highly motivated and persistent engineer with a growing portfolio of excellent work. He is a capable engineer, good communicator and hard worker. He would be a great addition to any team looking for an engineer who is dedicated to producing quality work, will work hard and deliver.
    `,
    link: `https://www.linkedin.com/in/nancyfelix123/`
  },
  {
    label: `- Ben Kupernik - Scientific Software Engineer - Geomega`,
    description: `Joe is a dedicated and persistent front end engineer. He is well versed in react and JavaScript as well as CSS and the frameworks Material UI and bootstrap. We have worked on several projects together and Joe's communication was clear and easy to understand. I would recommend Joe for any position where clear and effective communication and technical skills are required.
    `,
    link: `https://www.linkedin.com/in/nancyfelix123/`
  },
  {
    label: '- Elizabeta - Indivisible Colorado',
    description: `Joe really helped us out with our Indivisible CO website. Before Joe, our site had clunky graphics and lots of outdated content. Joe updated our theme, added some eye-catching graphics, organized the content, and resolved some back-end issues. This was not easy because we didn't have much budget to work with, and Joe had to manage requests from our team of 8. His ability to listen to everyone, prioritize requests, and clearly communicate what could and couldn't be done was invaluable. He worked within our budget and is training us to manage minor updates on our own. I'm thrilled with the work that Joe provided and would recommend him to others.`,
    link: `https://indivisiblecolorado.net/`
  },
];



export default function ReviewCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };  
  
  return (
    <Paper elevation={24} sx={{ maxWidth: '100%', flexGrow: 1}}>
    <Paper
      square
      elevation={0}
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 70,
        pl: 2,
        bgcolor: 'background.default',
        justifyContent: 'center',
      }}
    >
      <Typography>{steps[activeStep].label}</Typography>
    </Paper>
    <Box sx={{ height: '100%', maxWidth: '80%', width: '100%', p: 5}}>
      {steps[activeStep].description}
    </Box>
    <MobileStepper
      
      variant="text"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  </Paper>
  );
}