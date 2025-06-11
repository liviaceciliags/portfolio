import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const Projects: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const StyledVideo = styled("video")(({ theme }) => ({
        alignContent: "center",
        width: "60%",
        position: "relative",
        border: theme.palette.secondary.main,
        objectFit: "cover",  // Garante que o vídeo ocupe toda a área disponível da moldura
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Opcional, para dar um efeito de sombra
    }));

    const projects = [
        {
            title: "Projeto Eremita",
            subtitle: "Set 2022 - Set 2023",
            srcImg: "public/assets/images/project-eremita.png",
            description: "Desenvolvimento de sistemas embarcados para CubeSats focados em monitoramento ambiental. Integração de sensores ambientais (DHT22, GPS, gás, LDR) com microcontrolador Arduino para módulos sensoriais e ESP32 para o CubeSat, comunicação via LoRa e análise de dados com Python. Projeto premiado na 2ª edição da Olimpíada Brasileira de Satélites (OBSAT - MCTI).",
            technologies: "Tecnologias: ESP32, Arduino, LoRa, C++, Python, PlatformIO, EasyEDA, Visual Studio Code",
            websiteURL: "https://youtu.be/43qg72X6xF0?si=DCIbM6Z_jyxW--Wf",
            codeURL: "https://drive.google.com/drive/folders/1qEbkhjotKO7vtbqmOhWA0ZjVFDldj8lf?usp=drive_link",
        },
        {
            title: "Projeto GeoScanSat",
            subtitle: "Mar 2023 - Set 2024",
            srcImg: "public/assets/images/project-geoscansat.png",
            description: "Desenvolvimento de CubeSat e módulos sensoriais fluviais para coleta de dados ambientais. Integração de sensores de pH, condutividade e temperatura, comunicação via LoRa e imageamento com câmera Raspberry Pi v2. Processamento local com modelo YOLOv8 e interface web para visualização em tempo real. Projeto reconhecido pela Prefeitura de Santa Rita do Sapucaí.",
            technologies: "Tecnologias: Arduino Nano, ESP8266, Raspberry Pi, LoRa, YOLOv8, Flask, Python, Google Earth Engine, Google Colab",
            websiteURL: "https://youtu.be/aKg6iSxIr9Y?si=-bu4x3bJa3gMFeBw",
            codeURL: "https://github.com/GeoScanSat",
        },
        {
            title: "Projeto MechBerry",
            subtitle: "Abr 2024 - Out 2024",
            srcImg: "public/assets/images/project-mechberry.jpg",
            description: "Robô autônomo para colheita de morangos, premiado na FETIN 2024. Implementação de IA embarcada com YOLO para detecção de frutas, comunicação LoRa e app de controle em Java. Controle de irrigação automática e iluminação inteligente para agricultura de precisão.",
            technologies: "Tecnologias: ESP8266, Arduino Nano, LoRa, YOLO, Python, Java, MQTT, MySQL, FreeCAD, Android Studio",
            websiteURL: "https://drive.google.com/drive/folders/1qEbkhjotKO7vtbqmOhWA0ZjVFDldj8lf?usp=drive_link",
            codeURL: "https://github.com/MechBerry",
        },
        {
            title: "Projeto GoldFever",
            subtitle: "Out 2024 - Presente",
            srcImg: "public/assets/images/project-goldfever.png",
            description: "Solução para monitoramento de garimpo ilegal utilizando UAVs com IA embarcada. Desenvolvimento de infraestrutura IoT com sensores ambientais, comunicação via CubeSat e processamento de imagens com YOLO e RT-DETR. Visualização de dados via interface web.",
            technologies: "Tecnologias: UAVs, LoRa, CubeSat, Python, YOLOv8, RT-DETR, Roboflow, Google Earth Engine, Flask, MySQL, HTML, CSS",
            websiteURL: "https://drive.google.com/drive/folders/1qEbkhjotKO7vtbqmOhWA0ZjVFDldj8lf?usp=drive_link",
            codeURL: "https://drive.google.com/drive/folders/1qEbkhjotKO7vtbqmOhWA0ZjVFDldj8lf?usp=drive_link",
        },
    ]
    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
                <Box pb={2}>
                    <Typography align="center" color="primary.contrastText">Participação no Globo Repórter (programa de 05/10/2024)</Typography>
                </Box>
                <Box pb={2}>
                    <Grid item xs={9} md={6}>
                        <Grid container spacing={2} justifyContent="center">
                            <StyledVideo controls>
                                <source src="public/assets/videos/video.mp4" type="video/mp4" />
                                Seu navegador não suporta o elemento de vídeo.
                            </StyledVideo>
                        </Grid>
                    </Grid>
                </Box>
                <Box pb={2}>
                    <Typography align="center" color="primary.contrastText">"Inovações, desenvolvidas por brasileiros, parecem ter saído do futuro e já impactam a nossa vida! Estão na saúde, no transporte e até no espaço."</Typography>
                </Box>
            </Container>
        </StyledExperience>
    )
}

export default Projects
