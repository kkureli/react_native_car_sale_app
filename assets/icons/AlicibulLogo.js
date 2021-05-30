import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

function AlicibulLogo(props) {
  return (
    <Svg
      width={185}
      height={79}
      viewBox="0 0 185 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h185v79H0z" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.00446 0 0 .0104 .014 .084)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={216}
          height={75}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default AlicibulLogo;
