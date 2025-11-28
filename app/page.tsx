import TicTacToe from "@/components/tic-tac-toe"

export const metadata = {
  title: "Tic Tac Toe",
  description: "A classic 3x3 tic-tac-toe game",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <TicTacToe />
      </div>
    </main>
  )
}
