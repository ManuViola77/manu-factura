export const LETTER_STATUS = {
  correct: '#538d4e',
  misplaced: '#b59f3b',
  nothing: '#818384',
  incorrect: '#3a3a3c',
};

export const LETTER_STATUS_ICON = {
  [LETTER_STATUS.correct]: '🟩',
  [LETTER_STATUS.misplaced]: '🟨',
  [LETTER_STATUS.incorrect]: '⬜',
};

export const GAME_STATUS = {
  lost: 'lost',
  playing: 'playing',
  won: 'won',
};

export const RANKING_VALUES = [
  {
    value: 'currentStreak',
    label: 'Current Streak',
    getNumericValue: ({ currentStreak }) => currentStreak,
    getRightText: ({ currentStreak }) => `${currentStreak} 🔥`,
    getSuffix: ({ lastDatePlayed }) => `(${lastDatePlayed})`,
  },
  {
    value: 'longestStreak',
    label: 'Longest Streak',
    getNumericValue: ({ longestStreak }) => longestStreak,
    getRightText: ({ longestStreak }) => `${longestStreak} 🔥`,
    getSuffix: ({ longestStreakDate }) => `(${longestStreakDate})`,
  },
  {
    value: 'numberOfGames',
    label: 'Number of Games',
    getNumericValue: ({ totalGames }) => totalGames,
    getRightText: ({ totalGames }) => totalGames,
    getSuffix: () => '',
  },
  {
    value: 'totalWins',
    label: 'Total Wins',
    getNumericValue: ({ totalWins }) => totalWins,
    getRightText: ({ totalWins }) => `${totalWins} 🎉`,
    getSuffix: () => '',
  },
  {
    value: 'totalLosses',
    label: 'Total Losses',
    getNumericValue: ({ totalGames, totalWins }) => totalGames - totalWins,
    getRightText: ({ totalGames, totalWins }) =>
      `${totalGames - totalWins} ${totalGames > totalWins ? '😢' : '😌'}`,
    getSuffix: () => '',
  },
  {
    value: 'winsPercentage',
    label: 'Wins (%)',
    getNumericValue: ({ totalGames, totalWins }) =>
      totalGames ? ((totalWins * 100) / totalGames).toFixed(0) : 0,
    getRightText: ({ totalGames, totalWins }) =>
      `${totalGames ? ((totalWins * 100) / totalGames).toFixed(0) : 0} %`,
    getSuffix: () => '',
  },
];
