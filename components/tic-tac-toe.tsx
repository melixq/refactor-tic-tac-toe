"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BOARD_SIZE } from "@/lib/game-constants"
import { Board } from "@/components/game-board"
import {
  calculateWinner,
  isBoardFull,
  getNextPlayer,
  getStatusMessage,
  randomizePlayer,
  type Player,
} from "@/lib/game-utils"

interface GameState {
  board: Player[]
  currentPlayer: "X" | "O"
  winner: Player
  gameOver: boolean
}

export default function TicTacToe() {
  const [gameState, setGameState] = useState<GameState>(() => ({
    board: Array(BOARD_SIZE).fill(null),
    currentPlayer: "X",
    winner: null,
    gameOver: false,
  }))

  useEffect(() => {
    setGameState((prev) => ({
      ...prev,
      currentPlayer: randomizePlayer(),
    }))
  }, [])

  // Handle square click
  const handleSquareClick = (index: number) => {
    if (gameState.board[index] || gameState.winner) return

    const newBoard = [...gameState.board]
    newBoard[index] = gameState.currentPlayer

    const winner = calculateWinner(newBoard)
    const isFull = isBoardFull(newBoard)

    setGameState({
      board: newBoard,
      currentPlayer: getNextPlayer(gameState.currentPlayer),
      winner,
      gameOver: !!winner || isFull,
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

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-foreground">Tic Tac Toe</h1>
        <p className="text-muted-foreground">3x3 Classic Game</p>
      </div>

      <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
        {/* Status */}
        <div className="mb-8 text-center">
          <p className="text-xl font-semibold text-foreground">
            {getStatusMessage(gameState.winner, gameState.gameOver, gameState.currentPlayer)}
          </p>
        </div>

        {/* Game Board */}
        <div className="mb-8">
          <Board
            board={gameState.board}
            gameOver={gameState.gameOver}
            onSquareClick={handleSquareClick}
          />
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
