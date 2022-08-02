import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, withStylesPropTypes } from 'react-with-styles';
import Theme from './Theme';

ThemedStyleSheet.registerTheme(Theme); //Theme 파일 등록
ThemedStyleSheet.registerInterface(aphroditeInterface); //

export { css, withStyles, withStylesPropTypes, ThemedStyleSheet };
export default withStyles;