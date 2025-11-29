"use client"

import { Button } from "@/components/ui/button"
import { Board } from "@/components/game-board"
import { getStatusMessage } from "@/lib/game-utils"
import { useTicTacToe } from "@/hooks/use-tic-tac-toe"


export default function TicTacToe() {
  const { gameState, handleReset, handleSquareClick } = useTicTacToe()

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