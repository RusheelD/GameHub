import React, { useState } from "react";

import { Box, Button, Card, Input, Tab, Tabs } from "@mui/material";

import { JoinRoomPageProps } from "../models";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                width: "fit-content",
                padding: "0px",
            }}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box padding={0} sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const JoinRoomPage = (props: JoinRoomPageProps) => {
    const { setRoomCode } = props;
    const [roomCode, setRoomCodeInternal] = useState<string>("");
    const [value, setValue] = useState<number>(0);

    return (
        <Card>
            <Tabs style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                width: "fit-content"
            }} value={value} onChange={(_, newValue) => setValue(newValue)} aria-label="simple tabs example">
                <Tab label={"Join Room"} {...a11yProps(0)} />
                <Tab label={"Create Room"} {...a11yProps(1)} />
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <h1>{"Join Room"}</h1>
                <Input value={roomCode} onChange={(e) => setRoomCodeInternal(e.target.value)} />
                <Button onClick={() => setRoomCode(roomCode)}>Join Room</Button>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <h1>{"Create Room"}</h1>
                <Button onClick={() => setRoomCode("123456")}>Create Room</Button>
            </CustomTabPanel>
        </Card>
    );
};

export default JoinRoomPage;