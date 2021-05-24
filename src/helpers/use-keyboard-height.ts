import {useCallback, useEffect, useMemo, useState} from 'react';
import {Keyboard, Platform} from 'react-native';

const useKeyboardHeight = (platforms: string[] = ['ios', 'android']) => {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const isEventRequired = useCallback(
    (plat: any) => {
      try {
        return (
          plat?.map((p: string) => p?.toLowerCase()).indexOf(Platform.OS) !==
            -1 || !platforms
        );
      } catch (ex) {
        console.log('bug', ex);
      }

      return false;
    },
    [platforms],
  );

  const keyboardDidShow = useCallback((frames: any) => {
    setKeyboardHeight(frames.endCoordinates.height);
  }, []);

  const keyboardDidHide = useCallback(() => {
    setKeyboardHeight(0);
  }, []);

  useEffect(() => {
    if (isEventRequired(platforms)) {
      Keyboard.addListener('keyboardDidShow', keyboardDidShow);
      Keyboard.addListener('keyboardDidHide', keyboardDidHide);

      // cleanup function
      return () => {
        Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
        Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
      };
    }
  }, [isEventRequired, keyboardDidHide, keyboardDidShow, platforms]);

  return useMemo(() => keyboardHeight, [keyboardHeight]);
};

export default useKeyboardHeight;
