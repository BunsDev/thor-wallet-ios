import {useRef} from 'react';
import {useSharedValue} from 'react-native-reanimated';

export function useMemoizedSharedValue<T>(value: T, shouldRebuild = false) {
  const ref = useRef<T | null>(null);
  if (ref.current === null || shouldRebuild) {
    ref.current = value;
  }

  return useSharedValue(ref.current);
}
