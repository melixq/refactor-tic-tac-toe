"use client"

import { PLAYER_COLORS, BOARD_COLUMNS } from "@/lib/game-constants"
import type { Player } from "@/lib/game-utils"

interface BoardProps {
  board: Player[]
  gameOver: boolean
  onSquareClick: (index: number) => void
}

export function Board({ board, gameOver, onSquareClick }: BoardProps) {
  const getSquareClasses = (value: Player) => {
    if (!value) return "bg-secondary hover:bg-primary hover:text-primary-foreground"
    return `${PLAYER_COLORS[value].bg} ${PLAYER_COLORS[value].text}`
  }

  return (
    // Иногда, доска рендерится как большой блок 9х1 вместо 3х3, я не понимаю почему так...
    // Причем (вроде бы), если не использовать интерполяцию строк, то всё будет работать ок, но 
    // я всё таки считаю, что такие константы должны быть выделены отдельно, а не существовали как
    // магические числа...
    <div className={`grid grid-cols-${BOARD_COLUMNS} gap-3`}>
      {board.map((value, index) => (
        <button
          key={index}
          onClick={() => onSquareClick(index)}
          className={
            `aspect-square ${getSquareClasses(value)} 
            border-2 border-border rounded-lg font-bold text-3xl 
            transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer`
            }
          disabled={gameOver && !value}
        >
          {value}
        </button>
      ))}
    </div>
  )
}