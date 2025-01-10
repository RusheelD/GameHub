import React, { useState } from "react";
import { PokerChipsOnlyProps } from "../models";
import { GamePage } from ".";

const PokerChipsOnly = (props: PokerChipsOnlyProps) => {
    const { setSelectedGame } = props;
    const [roomCode, setRoomCode] = useState<string>("");

    return (
        <GamePage
            setSelectedGame={setSelectedGame}
            pageName={"Poker Chips Only"}
            roomCode={roomCode}
            setRoomCode={setRoomCode}
            pageContent={null}
        />
    );
}

export default PokerChipsOnly;