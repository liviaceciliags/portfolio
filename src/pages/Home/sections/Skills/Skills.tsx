import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"

const Skills: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: "#D64045",
            color: theme.palette.secondary.main,
        }
    }));

    const skillsSet = [
        // Linguagens de Programação
        "Python", "C++", "C", "Java", "JavaScript", "HTML", "CSS",
        // Frameworks e Bibliotecas
        "React", "Flask", "TensorFlow", "YOLOv8", "MQTT",
        // Banco de Dados
        "MySQL",
        // Hardware e IoT
        "ESP32", "Arduino", "Raspberry Pi", "LoRa",
        // Ferramentas e Plataformas
        "Roboflow", "PlatformIO", "GEE", "Git", "Postman", "Cypress",

        // Design e CAD
        "Altium", "FreeCAD", "EasyEDA",

        // Estatística e Análise de Dados
        "BioEstat", "Excel"
    ];

    return (
        <>
            <Container maxWidth="lg" sx={{ pb: 1 }}>
                <Box id="skills" pt={5} pb={3}>
                    <Typography variant="h3" textAlign="center" color="primary.main" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={2} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Skills
