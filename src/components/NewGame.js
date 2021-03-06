import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../../styles/components/NewGame.scss';

function NewGame({
  difficulty,
  triviaType,
  category,
  getDifficulty,
  getTriviaType,
  getCategory,
  startGame,
}) {
  return (
    <div className="new-game">
      <div className="new-game__title">Who Knows?</div>
      <div className="new-game__subtitle">
        A trivia game that you will probably end up playing while in the bathroom.
      </div>
      <div className="new-game__options">
        <div className="new-game__diff">
          <div className="new-game__header">Difficulty</div>
          <div className="new-game__buttons">
            {['easy', 'medium', 'hard'].map(item => {
              const classes = cx('new-game__button', {
                'new-game__button--selected': difficulty === item,
              });
              return (
                <button
                  type="button"
                  className={classes}
                  key={item}
                  onClick={() => getDifficulty(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="new-game__type">
          <div className="new-game__header">Question type</div>
          <div className="new-game__buttons">
            {['any', 'multiple', 'boolean'].map(item => {
              const classes = cx('new-game__button', {
                'new-game__button--selected': triviaType === item,
              });
              return (
                <button
                  type="button"
                  className={classes}
                  key={item}
                  onClick={() => getTriviaType(item)}
                >
                  {item === 'boolean' ? 'true/false' : item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="new-game__category">
          <div className="new-game__header">Category</div>
          <div className="new-game__buttons">
            {['any', 'entertainment', 'history', 'science', 'sports', 'others'].map(item => {
              const classes = cx('new-game__button', {
                'new-game__button--selected': category === item,
              });
              return (
                <button
                  type="button"
                  className={classes}
                  key={item}
                  onClick={() => getCategory(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <button type="button" className="new-game__button start-button" onClick={startGame}>
        Start!
      </button>
    </div>
  );
}

NewGame.propTypes = {
  difficulty: PropTypes.string.isRequired,
  triviaType: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  getDifficulty: PropTypes.func.isRequired,
  getTriviaType: PropTypes.func.isRequired,
  getCategory: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default NewGame;
