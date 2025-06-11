import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const Pillar: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.secondary.main,
        }
    }));
    return (
        <>
            <Container maxWidth="lg" sx={{ pb: 1 }}>
                <Box id="pillar" pt={5} pb={3}>
                    <Typography variant="h3" textAlign="center" color="primary.main" fontWeight={300}>Pilar Cultural</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={9} md={8}>
                            <AnimationComponent moveDirection="right">
                                <StyledCard variant="outlined">
                                    <Typography variant="h4" fontWeight={600}>Tenha abertura e honestidade ao falar e ouvir.</Typography>
                                    <Typography mt={1}>Tenha atitude respeitosa nos diálogos. Valorize diferentes perspectivas e opiniões.</Typography>
                                    <Typography mt={1}>Demonstre vulnerabilidade e ouça com a mente aberta. </Typography>
                                    <Typography mt={1}>Desafie ideias e critique processos mas sendo gentil com pessoas.</Typography>
                                </StyledCard>
                            </AnimationComponent>
                        </Grid>
                        <Grid item xs={9} md={8}>
                            <AnimationComponent moveDirection="left">
                                <StyledCard variant="outlined">
                                    <Typography variant="h4" fontWeight={600}>Justificativa:</Typography>
                                    <Typography mt={1}>Como estagiária, reconheço a importância de ter uma postura aberta e honesta ao dialogar e ouvir. Estou sempre disposta a aprender, absorvendo novas experiências e conhecimentos que complementem minha formação profissional. Acredito que a troca de ideias é fundamental para o crescimento mútuo, tanto pessoal quanto da empresa. Ao valorizar diferentes perspectivas e ser receptiva às críticas construtivas, pretendo contribuir de maneira colaborativa, desafiando ideias e aprimorando processos com respeito e gentileza.</Typography>
                                </StyledCard>
                            </AnimationComponent>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <hr />
        </>
    )
}
export default Pillar
