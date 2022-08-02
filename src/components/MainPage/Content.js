import * as React from 'react';
import Typography from '@mui/material/Typography';

import withStyles,{css} from '../../withStyles';

function Content(props) {
  const {
    styles,
    children
  } = props;

  return (
    <Typography variant="body1" gutterBottom component="div"
                    sx={{
                    mr: 2,
                    fontFamily: 'serif',
                    fontWeight: 700,
                    textAlign: { xs: 'center', md: 'right' },
                }} {...css(styles.default,)}>
        {children}
    </Typography>
  );
}


export default withStyles(({ color }) => ({
  default: {
    color: color.pLight,
  }
}))(Content);

