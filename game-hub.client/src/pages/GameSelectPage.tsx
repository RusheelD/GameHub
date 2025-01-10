import React from "react";
import { Button, Card } from "@mui/material";
import { Games, GameSelectPageProps } from "../models"

const GameSelectPage = (props: GameSelectPageProps) => {
    const { setSelectedGame } = props;

    return (
        <Card>
            <h1>{"Select a Game"}</h1>
            <Button onClick={() => setSelectedGame(Games.MonopolyMoneyOnly)}>Monopoly Money Only</Button>
            <Button onClick={() => setSelectedGame(Games.PokerChipsOnly)}>Poker Chips Only</Button>
        </Card>
    );
};

export default GameSelectPage;