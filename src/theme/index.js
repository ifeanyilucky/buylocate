import { extendTheme } from '@chakra-ui/react';
import { CardComponent } from './card';
import { buttonStyles } from './components/button';
import { badgeStyles } from './components/badge';
import { inputStyles } from './components/input';
// import { progressStyles } from "./components/progress";
// import { sliderStyles } from "./components/slider";
import { textareaStyles } from './components/textarea';
// import { switchStyles } from "./components/switch";
import { linkStyles } from './components/link';
import { breakpoints } from './breakpoints';
import { globalStyles } from './styles';
import { TextStyles } from './components/Text';
import { HeadingStyles } from './components/Heading';

export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  badgeStyles, // badge styles
  buttonStyles, // button styles
  linkStyles, // link styles
  //   progressStyles, // progress styles
  //   sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  //   switchStyles, // switch styles
  CardComponent, // card component
  TextStyles,
  HeadingStyles
);
