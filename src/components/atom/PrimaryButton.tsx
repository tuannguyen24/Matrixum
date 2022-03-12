import { FC } from 'react';
import { colors } from '../../themes/foundations/colors';

export interface ButtonProps {
  w?: string;
  h?: string;
  bg?: string;
  color?: string;
  label: string;
}

export const PrimaryButton: FC<ButtonProps> = ({ label, w, h, bg, color, ...props }) => {
  const buttonStyle = {
    width: w ?? '200px',
    height: h ?? '70px',
    background: bg ?? colors.lightOrange,
    border: `1px solid ${colors.lightOrange}`,
    _hover: {
      background: !bg ? colors.white : colors.lightOrange,
    },
  };
  const labelStyle = {
    fontSize: '17px',
    fontFamily: 'GeoMan',
    color: color ?? colors.white,
    _hover: {
      color: !bg ? colors.lightOrange : colors.white,
    },
  };
  return (
    <button style={buttonStyle}>
      <span style={labelStyle}>{label}</span>
    </button>
  );
};
