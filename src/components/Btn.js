import React from 'react';
import withStyles,{css} from './withStyles';

function Btn(props){
  const {
    children, 
    disabled, 
    styles, 
    large, 
    xlarge, 
    small, 
    xsmall, 
    primary, 
    secondary, 
    onPress,} = props;
  
  return (
    <button
      {...css(
        styles.default,
        xsmall && styles.xsmall,
        small && styles.small,
        large && styles.large,
        xlarge && styles.xlarge,
        secondary && styles.secondary,
        primary && styles.primary,
      )}
      disabled={disabled}
      onClick={onPress}>
      {children}
    </button>
  );
}

Btn.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};


export default withStyles(({ color, size, unit, responsive }) => ({
  default: {
    border: 1,
    borderStyle: 'solid',
    borderColor: color.default,
    borderRadius: 2,
    color: color.default,
    fontSize: size.md,
    padding: unit * 2,
    cursor: 'pointer',
    [responsive.small]: {
      width: '100%',
    },
  },
  fullWidth: {
    width: '100%',
  },
  xlarge: {
    fontSize: size.xg,
  },
  large: {
    fontSize: size.lg,
  },
  small: {
    fontSize: size.sm,
    padding: unit,
  },
  xsmall: {
    fontSize: size.xs,
    padding: unit,
  },
  primary: {
    borderColor: color.primary,
    color: color.white,
    backgroundColor: color.primary,
  },
  secondary: {
    borderColor: color.secondary,
    color: color.secondary,
  },
}))(Btn);