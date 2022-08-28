import React from "react";
import { Box } from "@mui/material";

function HorizontalScrollBar({ data }) {
    return (
        <div>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {item}
                </Box>
            ))}
        </div>
    );
}

export default HorizontalScrollBar;
