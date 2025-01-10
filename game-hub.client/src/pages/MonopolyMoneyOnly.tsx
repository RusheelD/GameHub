import React, { useState } from "react";
import { MonopolyMoneyOnlyProps } from "../models";
import { GamePage } from ".";

const MonopolyMoneyOnly = (props: MonopolyMoneyOnlyProps) => {
    const { setSelectedGame } = props;
    const [roomCode, setRoomCode] = useState<string>("");

    return (
        <GamePage
            setSelectedGame={setSelectedGame}
            pageName={"Monopoly Money Only"}
            roomCode={roomCode}
            setRoomCode={setRoomCode}
            pageContent={null}
        />
    );
};

export default MonopolyMoneyOnly;