const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  }
  catch {
    throw new Error("Invalid date!");
  }
  if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) { 
    season='winter' 
  }
  if (date.getMonth() >= 2 && date.getMonth() <= 4) { 
    season='spring' 
  }
  if (date.getMonth() >= 5 && date.getMonth() <= 7) { 
    season='summer' 
  }
  if (date.getMonth() >= 8 && date.getMonth() <= 10) { 
    season='autumn' 
  }
  return season;
}

module.exports = {
  getSeason
};
