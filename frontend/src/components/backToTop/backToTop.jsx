import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {isVisible && (
                <Button
                    variant="outlined"
                    sx={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: "1000",
                        minWidth: "50px",
                        height: "66px",
                        transition: "backgroundColor 0.3s ease",
                        border: "2px solid rgb(238, 23, 130)",
                        borderRadius: "10px",
                        backgroundColor: "rgb(238, 23, 130, 0.1)",
                        color: "rgb(238, 23, 130)",

                        "&:hover": {
                            border: "2px solid rgb(238, 23, 130)",
                            backgroundColor: "rgb(238, 23, 130, 0.1)",
                        },
                    }}
                    onClick={scrollToTop}
                >
                    <KeyboardArrowUpIcon
                        sx={{
                            fontSize: "2rem",
                            padding: 0,
                            margin: 0,
                            color: "rgb(238, 23, 130)",
                        }}
                    />
                </Button>
            )}
        </div>
    );
};

export default BackToTop;
