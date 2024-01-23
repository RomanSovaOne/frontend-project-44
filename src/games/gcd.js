import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const answerGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return answerGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const question = [getRandomNumber(1, 10), getRandomNumber(1, 10)];
  const answer = answerGcd(...question).toString();
  return [question.join(' '), answer];
};

export default () => {
  gameEngine(rule, getQuestionAndAnswer);
};
