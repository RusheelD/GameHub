export enum Games {
    Unselected,
    MonopolyMoneyOnly,
    PokerChipsOnly,
    // Monopoly,
    // Poker,
    // Chess,
    // Checkers,
    // Uno,
    // ConnectFour,
};

export interface GameSelectPageProps {
    setSelectedGame: (game: Games) => void;
};

export interface MonopolyMoneyOnlyProps {
    setSelectedGame: (game: Games) => void;
};

export interface PokerChipsOnlyProps {
    setSelectedGame: (game: Games) => void;
};

export interface JoinRoomPageProps {
    setRoomCode: (roomCode: string) => void;
};

export interface JoinRoomProps {
    roomCode: string;
    setRoomCode: (roomCode: string) => void;
    pageContent: React.ReactNode;
}

export interface GamePageProps {
    setSelectedGame: (game: Games) => void;
    pageName: string;
    pageContent: React.ReactNode;
    roomCode: string;
    setRoomCode: (roomCode: string) => void;
}