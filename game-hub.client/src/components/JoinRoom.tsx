import React from "react";
import { JoinRoomProps } from "../models";
import { Card, Button } from "@mui/material";


const JoinRoom = (props: JoinRoomProps) => {
    const { roomCode, setRoomCode, pageContent } = props;

    return (
        <>
            <Card>
                <h1>{`Room Code: ${roomCode}`}</h1>
                <Button onClick={() => setRoomCode("")}>Leave Room</Button>
            </Card>
            {pageContent}
        </>
    );
}

export default JoinRoom;