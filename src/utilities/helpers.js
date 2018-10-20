import { images } from './constants';

export function injectReducer(initialState, handlers) {
  return (state = initialState, action = {}) =>
    action.hasOwnProperty("type")
      ? handlers[action.type]
        ? handlers[action.type](state, action)
        : state
      : state;
};

export function getRandomPattern() {
  return images.patterns[Math.floor(Math.random() * images.patterns.length)];
};
