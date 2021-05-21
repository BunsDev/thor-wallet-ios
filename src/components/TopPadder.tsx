import React, {useMemo} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SPACING} from '../ui/theme/layout';

export const TopPadder: React.FC = () => {
  const safeArea = useSafeAreaInsets();
  const topPadding = useMemo(() => {
    return {
      height: Math.max(safeArea.top, SPACING * 2),
    };
  }, [safeArea.top]);
  return <View style={topPadding} />;
};
