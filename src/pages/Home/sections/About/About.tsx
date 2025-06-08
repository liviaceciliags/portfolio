import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const About: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <StyledCard variant="outlined">
                            <WorkspacePremiumIcon />
                            <Typography textAlign="center" fontWeight={600}>Curso Técnico</Typography>
                            <Typography textAlign="center">Técnico em Informática Integrado ao Ensino Médio</Typography>
                            <Typography textAlign="center">Instituto Federal</Typography>
                        </StyledCard>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <StyledCard variant="outlined">
                            <SchoolIcon />
                            <Typography textAlign="center" fontWeight={600}>Graduação</Typography>
                            <Typography textAlign="center">Engenharia de Computação</Typography>
                            <Typography textAlign="center">Inatel</Typography>
                            <Typography textAlign="center">7º Período</Typography>
                        </StyledCard>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography paragraph>
                        Sou Lívia Cecília Gomes Silva, estudante de Engenharia de Computação no Inatel, 
                        apaixonada por tecnologia e inovação. Desde o início da minha trajetória, venho unindo 
                        conhecimento técnico e propósito social em projetos desafiadores. Atuei com suporte técnico 
                        em redes e participei de projetos de iniciação científica com foco em sistemas embarcados, 
                        inteligência artificial e visão computacional aplicados a monitoramento ambiental e automação agrícola. 
                        Desenvolvi soluções integrando ESP32, LoRa, Raspberry Pi, YOLOv8 e Flask, e atualmente colaboro no projeto 
                        GoldFever, utilizando IA e CubeSats para combate ao garimpo ilegal. Tenho experiência em análise de dados, 
                        robótica, modelagem, desenvolvimento de APIs, instrumentação e integração hardware/software, sempre com 
                        resiliência e curiosidade para aplicar a engenharia na transformação de realidades.
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default About
