import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function SearchExercises() {
    return (
        <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: "44px", xs: "30px" } }}
                mb="49px"
                textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "4px",
                        },
                        borderRadius: "40px",
                        backgroundColor: "#fff",
                        width: { lg: "1170px", xs: "350px" },
                    }}
                    height="76px"
                    value=""
                    onChange={(e) => { }}
                    placeholder="Search for exercises..."
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: "#FF2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "173px", xs: "80px" },
                        height: "56px",
                        position: "absolute",
                        right: "0px",
                        fontSize: { lg: "20px", xs: "14px" },
                    }}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
}

export default SearchExercises;
