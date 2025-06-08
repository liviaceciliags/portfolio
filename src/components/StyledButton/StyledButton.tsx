import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: "5px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: "#D64045",
            borderColor: "#D64045",
        }
    }));

    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    );
};


export default StyledButton;
