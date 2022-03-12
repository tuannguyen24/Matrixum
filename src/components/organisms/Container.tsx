import { FC } from 'react';

export interface ContainerProps {
  maxW?: string;
  padding?: string;
  margin?: string;
}

export const Container: FC<ContainerProps> = ({ margin, padding, maxW, ...props }) => {
  const containerStyle = {
    maxWidth: maxW ?? '1280px',
    padding: padding ?? '0 20px',
    margin: margin ?? 'auto',
  };

  return <div style={containerStyle}>{props.children}</div>;
};
