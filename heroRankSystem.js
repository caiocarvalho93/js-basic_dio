function calculateRank(wins, losses) {
  const winBalance = wins - losses;
  let rank;

  if (wins < 10) {
    rank = 'Iron';
  } else if (wins >= 11 && wins <= 20) {
    rank = 'Bronze';
  } else if (wins >= 21 && wins <= 50) {
    rank = 'Silver';
  } else if (wins >= 51 && wins <= 80) {
    rank = 'Gold';
  } else if (wins >= 81 && wins <= 90) {
    rank = 'Diamond';
  } else if (wins >= 91 && wins <= 100) {
    rank = 'Legendary';
  } else { // wins >= 101
    rank = 'Immortal';
  }

  return {
    winBalance,
    rank
  };
}


const wins = 55;   
const losses = 20;

const result = calculateRank(wins, losses);

console.log(`The Hero has a win balance of 
    ${result.winBalance} and is at the rank of ${result.rank}.`);