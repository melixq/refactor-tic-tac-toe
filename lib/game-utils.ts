import { WINNING_LINES } from '@/lib/game-constants';


export type Player = "X" | "O" | null

export function calculateWinner(squares: Player[]): Player {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    const [a, b, c] = WINNING_LINES[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export function isBoardFull(squares: Player[]): boolean {
  return squares.every((square) => square !== null)
}

export function getNextPlayer(currentPlayer: "X" | "O"): "X" | "O" {
  return currentPlayer === "X" ? "O" : "X"
}

export function getStatusMessage(winner: Player, gameOver: boolean, currentPlayer: "X" | "O"): string {
  if (winner) {
    return `🎉 Player ${winner} Wins!`
  }
  if (gameOver) {
    return "It's a Draw!"
  }
  return `Current Player: ${currentPlayer}`
}

export function randomizePlayer(): "X" | "O" {
  return Math.random() < 0.5 ? "X" : "O"
}