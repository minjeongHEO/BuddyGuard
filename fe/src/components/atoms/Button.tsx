import styled, { DefaultTheme, useTheme } from 'styled-components';

interface ButtonStyleProps {
  $isClicked: boolean;
  $boxShadow?: string;
  $bgColor?: string;
  $isFocus?: boolean;
  $focusColor?: string;
  theme: DefaultTheme;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $isClicked?: boolean;
  $boxShadow?: string;
  $bgColor?: string;
  $isFocus?: boolean;
  $focusColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}
export const defaultShadow = '0rem 0.25rem 0.75rem rgba(0, 0, 0, 0.2)';

export default function Button({
  children,
  $bgColor = 'white',
  $isClicked = false,
  $boxShadow,
  $isFocus = true,
  onClick,
  style,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const defaultBorder = `${theme.themeValues.colorValues.special.textForce02} solid 0.1rem`;
  return (
    <StyledButton
      $bgColor={$bgColor}
      $isClicked={$isClicked}
      $boxShadow={$boxShadow || `0.1rem 0.15rem 0.25rem ${theme.currentTheme.shadow}}`}
      $isFocus={$isFocus}
      onClick={onClick}
      style={{ border: style?.border || defaultBorder, ...style }}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const getButtonStyle = ({ $isClicked, $boxShadow, $bgColor, theme }: ButtonStyleProps) => ({
  backgroundColor: $isClicked ? theme.themeValues.colorValues.special.modalBg : $bgColor,
  boxShadow: $isClicked ? $boxShadow : 'none',
  transform: $isClicked ? 'translateY(-2px)' : 'none',
});

const StyledButton = styled.button<ButtonStyleProps>`
  display: ${({ style }) => style?.display || 'flex'};
  justify-content: ${({ style }) => style?.justifyContent || 'center'};
  align-items: ${({ style }) => style?.alignItems || 'center'};
  text-align: ${({ style }) => style?.textAlign || 'center'};
  width: ${({ style }) => style?.width || '100%'};
  height: ${({ style }) => style?.height || '4rem'};
  ${({ $isClicked, $boxShadow, $bgColor, theme }) => getButtonStyle({ $isClicked, $boxShadow, $bgColor, theme })};
  font-size: ${({ style }) => style?.fontSize || '1rem'};
  color: ${({ style, theme }) => style?.color || theme.themeValues.colorValues.grayscale[900]};

  ${({ style }) => style?.borderRadius && `border-radius: ${style.borderRadius}`};
  cursor: pointer;
  transition: all 0.3s ease;

  ${({ $isFocus, $focusColor, theme }) =>
    $isFocus &&
    `&:hover,
  &:focus {
    background-color: ${$focusColor ? $focusColor : theme.themeValues.colorValues.special.modalBg};
  }`};
`;
