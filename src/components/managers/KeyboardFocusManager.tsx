import {useCallback, useEffect} from 'react';
import { Keyboard, KeyboardEventName, Platform } from "react-native";
import { setKeyboardVisible } from "../../helpers/use-keyboard-visible";


const hideEventName: KeyboardEventName =
  Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
const showEventName: KeyboardEventName =
  Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';

export const KeyboardFocusManager = () => {
  const showKeyboard = useCallback(() => {
    setKeyboardVisible(true);
  }, []);

  const hideKeyboard = useCallback(() => {
    setKeyboardVisible(false);
  }, []);

  useEffect(() => {
    Keyboard.addListener(showEventName, showKeyboard);
    Keyboard.addListener(hideEventName, hideKeyboard);
    return () => {
      Keyboard.removeListener(showEventName, showKeyboard);
      Keyboard.removeListener(hideEventName, hideKeyboard);
    };
  }, [hideKeyboard, showKeyboard]);

  return null;
};
