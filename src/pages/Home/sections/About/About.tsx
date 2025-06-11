import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import Baby from "../../../../assets/images/baby.jpg"; 
import Trabalho from "../../../../assets/images/trabalho.jpg";
import Pai from "../../../../assets/images/pai.jpg";
import Morango from "../../../../assets/images/represa.jpg";

const About: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        }
    }));

    const StyledImg = styled("img")(() => ({
        width: "100%", 
        height: "200px",  // Ajuste a altura de acordo com o tamanho desejado
        objectFit: "cover",  // Faz com que a imagem se ajuste sem distorcer
        borderRadius: "8px" 
    }));

    return (
        <>
            <Container maxWidth="lg" sx={{ pb: 1 }}>
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">Sobre Mim</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Curso Técnico</Typography>
                                <Typography textAlign="center">Técnico em Informática Integrado ao Ensino Médio</Typography>
                                <Typography textAlign="center">Instituto Federal</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Graduação</Typography>
                                <Typography textAlign="center">Engenharia de Computação</Typography>
                                <Typography textAlign="center">Inatel</Typography>
                                <Typography textAlign="center">7º Período</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography paragraph>
                        Sou natural de Pouso Alegre, no sul de Minas Gerais, onde minha família cultiva morangos na zona rural. Cresci em um ambiente simples, onde as dificuldades do campo faziam parte do cotidiano. Estudei em uma escola rural pública, com infraestrutura limitada e poucas perspectivas. No entanto, sempre soube que para mudar minha realidade e a de minha família, seria necessário aproveitar as oportunidades que surgissem.

                        Uma dessas oportunidades foi o ingresso no ensino técnico em informática no Instituto Federal. Sem experiência prévia com tecnologia, enfrentei o desafio de aprender tudo do zero. A vontade de aprender e superar as dificuldades me impulsionou a buscar os conhecimentos que eu ainda não tinha.

                        Hoje, no 7º período de Engenharia de Computação, me sinto orgulhosa da trajetória que venho construindo. Apesar dos desafios, minha motivação é poder fazer a diferença, aplicando meu conhecimento e esforço para transformar minha realidade. Atualmente, busco utilizar meus conhecimentos para criar soluções socioambientais que ajudem a resolver problemas atuais e a impactar positivamente a sociedade.                    
                    </Typography>
                </Box>
                <Box pt={3}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={6} sm={3}>
                            <StyledImg src={Baby} />
                            <Typography textAlign="center" variant="body2" color="textSecondary">Eu, Baby Moranguinho 2008.</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StyledImg src={Pai} />
                            <Typography textAlign="center" variant="body2" color="textSecondary">Meu pai na colheita de morangos.</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StyledImg src={Trabalho} />
                            <Typography textAlign="center" variant="body2" color="textSecondary">Auxiliando no processo de produção.</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StyledImg src={Morango} />
                            <Typography textAlign="center" variant="body2" color="textSecondary">Vida na zona rural.</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default About
