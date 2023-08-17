import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_StatusBarTime_DarkModeFalseTy.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _941?: ReactNode;
  };
}
/* @figmaId 1:65 */
export const _StatusBarTime_DarkModeFalseTy: FC<Props> = memo(function _StatusBarTime_DarkModeFalseTy(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._941 != null ? props.text?._941 : <div className={classes._941}>9:41</div>}
    </div>
  );
});
