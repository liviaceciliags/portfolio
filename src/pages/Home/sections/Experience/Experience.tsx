import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"

const Experience: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

const experiences = [
    {
        company: "Coorporativa Telecomunicações",
        role: "Estagiária de Suporte Técnico",
        period: "Set/2020 - Dez/2020",
        description: "Atuei em suporte técnico e atendimento, realizando diagnóstico de redes, manutenção de roteadores e ONUs, configuração de protocolos (PPPoE, DNS, MTU, VLANs) e resolução de problemas de conectividade cabeada.",
    },
    {
        company: "FAPEMIG",
        role: "Bolsista de Iniciação Científica",
        period: "Set/2022 - Set/2023",
        description: "Atuei na integração de sensores ambientais com sistemas embarcados e comunicação via LoRa em projetos de monitoramento com CubeSat. Experiência com programação embarcada em C++ e análise de dados com Python.",
    },
    {
        company: "CNPq",
        role: "Bolsista de Iniciação Científica",
        period: "Out/2023 - Set/2024",
        description: "Atuei como líder do time de CubeSat, desenvolvendo soluções embarcadas para automação agrícola e monitoramento ambiental, com integração de sensores, comunicação LoRa, inteligência artificial embarcada e análise de dados.",
    },
    {
        company: "Centro de Competência EMBRAPII Inatel em Redes 5G e 6G (xGMobile)",
        role: "Bolsista de Iniciação Científica",
        period: "Out/2024 - Atual",
        description: "Atuo no desenvolvimento de infraestrutura IoT e aplicação de visão computacional embarcada com redes neurais para detecção de garimpo ilegal em áreas remotas, utilizando imagens aéreas captadas por UAVs e CubeSats.",
    },
    {
        company: "Instituto Nacional de Telecomunicações (Inatel)",
        role: "Monitora Acadêmica",
        period: "Fev/2025 - Atual",
        description: "Monitora acadêmica nas disciplinas de Estatística, auxiliando na análise de dados com Excel e BioEstat, e em Álgebra e Geometria Analítica, com foco na adaptação de materiais para acessibilidade de alunos com deficiência visual.",
    }

];

    return (
            <Container maxWidth="lg">
                <Box id="experience" pt={5} pb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Experiência Profissional</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {experiences.map((exp, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <StyledCard variant="outlined">
                                    <Typography variant="h6" fontWeight={600}>{exp.company}</Typography>
                                    <Typography variant="subtitle1" fontWeight={500}>{exp.role}</Typography>
                                    <Typography variant="body2" color="textSecondary">{exp.period}</Typography>
                                    <Typography mt={1}>{exp.description}</Typography>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
    )
}

export default Experience
