import styled from 'styled-components/native';
import {TextProps} from '.';

export const CustomText = styled.Text<TextProps>`
  color: ${({color}) => color};
  font-size: ${({fontSize}) => fontSize}px;
  font-family: ${props => {
    switch (props.fontWeight) {
      case 'Black':
        if (props.italic) {
          return 'NoiGroteskTrial-BlackItalic';
        } else {
          return 'NoiGroteskTrial-Black';
        }

      case 'Bold':
        if (props.italic) {
          return 'NoiGroteskTrial-BoldItalic';
        } else {
          return 'NoiGroteskTrial-Bold';
        }

      case 'Light':
        if (props.italic) {
          return 'NoiGroteskTrial-LightItalic';
        } else {
          return 'NoiGroteskTrial-Light';
        }

      case 'Medium':
        if (props.italic) {
          return 'NoiGroteskTrial-RegularItalic';
        } else {
          return 'NoiGroteskTrial-Regular';
        }

      case 'Semibold':
        if (props.italic) {
          return 'NoiGroteskTrial-SemiboldItalic';
        } else {
          return 'NoiGroteskTrial-Semibold';
        }

      case 'Thin':
        if (props.italic) {
          return 'NoiGroteskTrial-ThinItalic';
        } else {
          return 'NoiGroteskTrial-Thin';
        }

      case 'UltraLight':
        if (props.italic) {
          return 'NoiGroteskTrial-UltraLightItalic';
        } else {
          return 'NoiGroteskTrial-UltraLight';
        }

      default:
        if (props.italic) {
          return 'NoiGroteskTrial-MediumItalic';
        } else {
          return 'NoiGroteskTrial-Medium';
        }
    }
  }};
`;
