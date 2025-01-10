import React, { useState, useEffect } from 'react';
import { Games } from './models';
// import logo from './logo.svg';
import './App.css';
import { GameSelectPage, MonopolyMoneyOnly, PokerChipsOnly } from './pages';
import { createTheme, ThemeProvider } from '@mui/material';

function App() {
  const [selectedGame, setSelectedGame] = useState<Games>();
  const [page, setPage] = useState<React.ReactNode>();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  useEffect(() => {
    switch (selectedGame) {
      case Games.MonopolyMoneyOnly:
        setPage(<MonopolyMoneyOnly setSelectedGame={setSelectedGame} />);
        break;
      case Games.PokerChipsOnly:
        setPage(<PokerChipsOnly setSelectedGame={setSelectedGame} />);
        break;
      default:
        setPage(<GameSelectPage setSelectedGame={setSelectedGame} />);
        break;
    }
  }, [selectedGame])

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>{page}</ThemeProvider>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
