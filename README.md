# Refactored simple Tic-Tac-Toe game

## Changelog

*  [Initial project import](https://github.com/melixq/refactor-tic-tac-toe/commit/18af38236ace9364b2e734f9a95bc426dfbf1413)
*  [♻️ refactor: randomize player on game start](https://github.com/melixq/refactor-tic-tac-toe/commit/37c89a3c48b375c7e140bf1b90c078a9923a0712)
*  [♻️ refactor: mv magic numbers to `game-constants.ts`](https://github.com/melixq/refactor-tic-tac-toe/commit/5df3122797411d5b3a921baba4ba5fc8bf06e353)
*  [♻️ refactor: mv game utility functions to `game-utils.ts`](https://github.com/melixq/refactor-tic-tac-toe/commit/559f543ba9800553b58ad1c1f62fa4665bf6e2d1)
*  [🐛 fix: hydration mismatch caused by `randomizePlayer()`](https://github.com/melixq/refactor-tic-tac-toe/commit/c0077f926fde4303652f5c4db07c0be0a8563427)
*  [✨ feature: add player colors](https://github.com/melixq/refactor-tic-tac-toe/commit/ffb2a54a3066eff3698ed5f3398a6a569ae93212)
*  [♻️ refactor: extract game board to separate `game-board.tsx` component](https://github.com/melixq/refactor-tic-tac-toe/commit/bdecd1494f48e3174190e6096fdb08a351b9b40c)
*  [♻️ refactor: extract game logic to separate `use-tic-tac-toe.ts` hook to simplify main game component](https://github.com/melixq/refactor-tic-tac-toe/commit/ea7461cab2f442e1344610a421bb877db69d4a66)
*  [⏪ revert: rm `BOARD_COLUMNS` constant usage in `game-board.tsx`](https://github.com/melixq/refactor-tic-tac-toe/commit/4f11f82bc85351f9ee7ff3cd614b7ce7d0b7c7f0)
*  [🎨 styling: use `dark theme` by default](https://github.com/melixq/refactor-tic-tac-toe/commit/cee9c83bd22fddad3d33c3d9ff22f1b0d5ff36ab)

## Comments

- Так как у меня действительно малый опыт работы с JS/TS и в целом всем, что касается фронта (просто не мой профиль), мне было довольно тяжело вычленить что-то серьезное для рефакторинга.

- Серьезных ошибок я найти не смог, да и в целом проект не слишком большой, нейронка отлично справилась со своей задачей. 
От себя из фичей я добавил только рандомизацию первого игрока и цвета для фигурок (потому что на паре у Вас она сделала сразу так, такого же эффекта я не смог добиться, поэтому имеем что имеем) 

- В остальном, ограничился рефакторингом на основе тех знаний, которые у меня были, сокращал логику и дробил её на отдельные составляющие. Ну и тему темную включил (для нее уже все было готово после нейронки).

- Ещё извиняюсь за эмодзи в коммитах, честно, мне они нравятся эстетически и у меня уже выработалась привычка их использовать, первый коммит я удержался, но со следующего уже не заметил, как начал использовать. (*кстати, [ссылка на расширение для VS Code](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode), мало ли...*)

---
**Кузнецов Максим Дмитриевич, РИМ-240950**