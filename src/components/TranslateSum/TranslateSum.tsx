import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _StatusBarTime_DarkModeFalseTy } from './_StatusBarTime_DarkModeFalseTy/_StatusBarTime_DarkModeFalseTy';
import { Button_ActiveOn } from './Button_ActiveOn/Button_ActiveOn';
import { CaretdownIcon } from './CaretdownIcon.js';
import { Group237Icon } from './Group237Icon.js';
import { Icon_visaIcon } from './Icon_visaIcon.js';
import { RightSideIcon } from './RightSideIcon.js';
import classes from './TranslateSum.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:143 */
export const TranslateSum: FC<Props> = memo(function TranslateSum(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.homeIndicator}>
        <div className={classes.homeIndicator2}></div>
      </div>
      <Button_ActiveOn
        className={classes.button2}
        text={{
          button: <div className={classes.button}>Transfer 100$</div>,
        }}
      />
      <div className={classes.rectangle66}></div>
      <div className={classes.messageToTheRecipient}>Message to the recipient</div>
      <div className={classes.commissionIsNotChargedByTheBan}>Commission is not charged by the bank</div>
      <div className={classes._100}>100$</div>
      <div className={classes.sum}>Sum</div>
      <div className={classes.rectangle68}></div>
      <div className={classes._9955597288}>+995 559 72 88</div>
      <div className={classes.aleksandr}>Aleksandr</div>
      <div className={classes.rectangle682}></div>
      <div className={classes.group237}>
        <Group237Icon className={classes.icon} />
      </div>
      <div className={classes.Card}>
        <div className={classes.rectangle1035}></div>
        <div className={classes._3040}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>•••• •••• •••• </span>
            <span className={classes.label2}>3040</span>
          </p>
        </div>
        <div className={classes.expiry}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>••</span>
            <span className={classes.label4}>/</span>
            <span className={classes.label5}>••</span>
          </p>
        </div>
        <div className={classes._1000}>10,000$</div>
        <div className={classes.salaryCard}>Salary card</div>
        <div className={classes.visa_Inc_logo1}></div>
        <div className={classes.icon_Visa}>
          <Icon_visaIcon className={classes.icon2} />
        </div>
      </div>
      <div className={classes.translate}>Translate</div>
      <div className={classes.caretDown}>
        <CaretdownIcon className={classes.icon3} />
      </div>
      <div className={classes.statusBar}>
        <_StatusBarTime_DarkModeFalseTy
          className={classes._StatusBarTime}
          text={{
            _941: <div className={classes._941}>9:41</div>,
          }}
        />
        <div className={classes.rightSide}>
          <RightSideIcon className={classes.icon4} />
        </div>
      </div>
    </div>
  );
});
