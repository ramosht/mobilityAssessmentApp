import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';

import * as S from './styles';
import {useAppColorScheme} from '@context/theme/theme.context';

export type TextProps = {
  children: React.ReactNode;
  color?: string;
  fontSize?: number;
  fontWeight?:
    | 'Black'
    | 'Bold'
    | 'Light'
    | 'Medium'
    | 'Regular'
    | 'Semibold'
    | 'Thin'
    | 'UltraLight';
  italic?: boolean;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  italic,
  style,
  children,
}) => {
  const {theme} = useAppColorScheme();

  return (
    <S.CustomText
      color={color || theme.text}
      fontSize={fontSize || 12}
      fontWeight={fontWeight}
      italic={italic || false}
      style={style}>
      {children}
    </S.CustomText>
  );
};

export default Text;
