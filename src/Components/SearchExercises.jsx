import React from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../UtilityFunction/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
    const [search, setSearch] = React.useState("");
    const [bodyParts, setBodyParts] = React.useState([]);

    React.useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
                exerciseOptions
            );
            setBodyParts(["all", ...bodyPartsData])
        };
        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                "https://exercisedb.p.rapidapi.com/exercises",
                exerciseOptions
            );

            const searchedExercises = exercisesData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search)
            );
            setSearch("");
            setExercises(searchedExercises);
        }
    };

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
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: "relative", width: "100%", p: '20px' }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
}

export default SearchExercises;
