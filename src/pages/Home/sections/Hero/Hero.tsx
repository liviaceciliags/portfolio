import { Box, Container, styled, Typography, Grid } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import Typewriter from "../../../../components/Typewriter/Typewriter"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/Open.pdf"

const Hero: React.FC = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.secondary.main,
    width: "100%",
    [theme.breakpoints.up('xs')]: {
        display: "block",
        padding: "20px",
        paddingTop: "100px",
        paddingBottom: "40px"
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        height: "100vh",
    },
  }));

    const StyledImg = styled("img")(() => ({
    alignContent: "center",
    width: "80%",
    borderRadius: "50%",
    position: "relative",
    border: "5px solid #D64045"
    }));

    const handleDownload = () => {
        console.log("download")
        const link = document.createElement('a');
        link.href = CV
        link.download = 'cv.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
    const emailAddress = 'liviaceciliags@gmail.com';
    const subject = 'Interesse no seu portfólio';
    const body = 'Olá Lívia! Encontrei seu portfólio e gostaria de conversar melhor sobre oportunidades.';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Box position="relative" pb={3}>
                <Box textAlign="center">
                    <StyledImg src={Avatar} />
                </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="theme.palette.secondary.main" variant="h1" textAlign="center" pb={2}>
              Lívia Cecília
            </Typography>
            <Typewriter text="Inatel | Engenharia de Computação | CubeSat Design Team | xGMobile" delay={110} variant="h3" color="#333333"/>
            <Box mt={3}>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid item xs={10} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={()=> handleDownload()}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={10} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={()=> handleEmail()}>
                    <EmailIcon />
                    <Typography>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
