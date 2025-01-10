import React from 'react';
import { GamePageProps, Games } from '../models';
import { Card, Button } from '@mui/material';
import { JoinRoom } from '../components';
import { JoinRoomPage } from '.';

const GamePage = (props: GamePageProps) => {
    const { setSelectedGame, pageName, pageContent, roomCode, setRoomCode } = props;

    return (
        <>
            <Card>
                <h1>{pageName}</h1>
                <Button onClick={() => setSelectedGame(Games.Unselected)}>Back</Button>
            </Card>
            {roomCode === ""
                ? <JoinRoomPage setRoomCode={setRoomCode} />
                : <JoinRoom roomCode={roomCode} setRoomCode={setRoomCode} pageContent={pageContent} />}
        </>
    );
}

export default GamePage;