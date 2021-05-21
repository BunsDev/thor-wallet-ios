import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SPACING} from '../ui/theme/layout';

export const BottomPadder: React.FC = () => {
  const safeArea = useSafeAreaInsets();
  const bottomPadding = useMemo(() => {
    return {
      height: Math.max(safeArea.bottom, SPACING * 2),
    };
  }, [safeArea.bottom]);
  return <View style={bottomPadding} />;
};
