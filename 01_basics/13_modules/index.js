const { logger } = require("./logger");
const { filter, sum, multiply } = require("./math");

logger("Logging first Message");
logger("Hi this is message from index js");

logger(filter([1, 2, 3, 4, 5, 6, 7], (number) => number > 5));
logger(filter([1, 2, 3, 4, 5, 6, 7], (number) => number == 5));
logger(filter([1, 2, 3, 4, 5, 6, 7], (number) => number < 5));

logger(sum(23, 58));

logger(multiply(78, 54));
