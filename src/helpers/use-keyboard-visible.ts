import {createGlobalState} from 'react-hooks-global-state';

const globalKeyboardState = createGlobalState({
  visible: false,
});

export const setKeyboardVisible = (visible: boolean) =>
  globalKeyboardState.setGlobalState('visible', visible);

export const useKeyboardVisible = () => {
  const [keyboardVisible] = globalKeyboardState.useGlobalState('visible');
  return keyboardVisible;
};
