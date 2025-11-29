import { useState, useEffect } from "react"
import { BOARD_SIZE } from "@/lib/game-constants"
import {
  calculateWinner,
  isBoardFull,
  getNextPlayer,
  randomizePlayer,
  type Player,
} from "@/lib/game-utils"


interface GameState {
  board: Player[]
  currentPlayer: "X" | "O"
  winner: Player
  gameOver: boolean
}

export function useTicTacToe() {
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

  return {
    gameState,
    handleSquareClick,
    handleReset,
  }
}