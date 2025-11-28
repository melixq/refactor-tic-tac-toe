export const BOARD_SIZE = 9
export const BOARD_COLUMNS = 3

export const WINNING_LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

export const PLAYER_COLORS = {
  X: {
    bg: "bg-red-50 dark:bg-red-950",
    text: "text-red-600 dark:text-red-400",
  },
  O: {
    bg: "bg-green-50 dark:bg-green-950",
    text: "text-green-600 dark:text-green-400",
  },
} as const