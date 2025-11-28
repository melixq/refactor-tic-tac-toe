"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { WINNING_LINES, BOARD_COLUMNS, BOARD_SIZE } from '@/lib/game-constants';

type Player = "X" | "O" | null

interface GameState {
  board: Player[]
  currentPlayer: "X" | "O"
  winner: Player
  gameOver: boolean
}

export default function TicTacToe() {
const randomizePlayer = () => {
    return Math.random() < 0.5 ? "X" : "O";
  }

const [gameState, setGameState] = useState<GameState>({
    board: Array(BOARD_SIZE).fill(null),
    currentPlayer: randomizePlayer(),
    winner: null,
    gameOver: false,
  })

  // Calculate winner
  const calculateWinner = (squares: Player[]): Player => {
    for (let i = 0; i < WINNING_LINES.length; i++) {
      const [a, b, c] = WINNING_LINES[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  // Handle square click
  const handleSquareClick = (index: number) => {
    if (gameState.board[index] || gameState.winner) return

    const newBoard = [...gameState.board]
    newBoard[index] = gameState.currentPlayer

    const winner = calculateWinner(newBoard)
    const isBoardFull = newBoard.every((square) => square !== null)

    setGameState({
      board: newBoard,
      currentPlayer: gameState.currentPlayer === "X" ? "O" : "X",
      winner,
      gameOver: !!winner || isBoardFull,
    })
  }

  // Reset game
  const handleReset = () => {
    setGameState({
      board: Array(BOARD_SIZE).fill(null),
      currentPlayer: randomizePlayer(),
      winner: null,
      gameOver: false,
    })
  }

  // Determine status message
  const getStatusMessage = () => {
    if (gameState.winner) {
      return `🎉 Player ${gameState.winner} Wins!`
    }
    if (gameState.gameOver) {
      return "It's a Draw!"
    }
    return `Current Player: ${gameState.currentPlayer}`
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Tic Tac Toe</h1>
        <p className="text-muted-foreground">3x3 Classic Game</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
        {/* Status */}
        <div className="mb-8 text-center">
          <p className="text-xl font-semibold text-foreground">{getStatusMessage()}</p>
        </div>

        {/* Game Board */}
        <div className={`grid grid-cols-${BOARD_COLUMNS} gap-3 mb-8`}>
          {gameState.board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleSquareClick(index)}
              className="aspect-square bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground border-2 border-border rounded-lg font-bold text-3xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              disabled={gameState.gameOver && !value}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Reset Button */}
        <Button
          onClick={handleReset}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-lg font-semibold transition-colors"
          size="lg"
        >
          New Game
        </Button>
      </div>

      {/* Game Rules */}
      <div className="bg-muted/30 border border-border rounded-lg p-4 space-y-2">
        <h3 className="font-semibold text-foreground">How to Play</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Players take turns marking squares</li>
          <li>• First player to get 3 in a row wins</li>
          <li>• Click "New Game" to reset</li>
        </ul>
      </div>
    </div>
  )
}
