import styles from './MainPage.module.scss';
import { useRef, useState } from 'react';
import { Input } from '../../components/ui/Input/Input';
import { Card } from '@/components/Card/Card';

import { Text } from './components/Text/Text';
import { LinkField } from './components/LinkField/LinkField';

export const MainPage = () => {
  const [telegramValue, setTelegramValue] = useState('');
  const [githubValue, setGithubValue] = useState('');
  const [siteValue, setSiteValue] = useState('');

  const userInfoRef = useRef({
    telegram: '',
    github: '',
    site: '',
  });

  userInfoRef.current = {
    telegram: telegramValue,
    github: githubValue,
    site: siteValue,
  };

  return (
    <Card>
      <div className={styles.root}>
        <Text />
        <div className={styles.contactInputs}>
          <Input
            className={styles.input}
            label={'Ваш Telegram'}
            placeholder={'paveltrety'}
            name={'telegram'}
            value={telegramValue}
            onChange={(event) => setTelegramValue(event.target.value)}
          />
          <Input
            className={styles.input}
            label={'Ссылка на GitHub'}
            placeholder={'https://github.com/Paveltrety'}
            name={'github'}
            value={githubValue}
            onChange={(event) => setGithubValue(event.target.value)}
          />

          <Input
            className={styles.input}
            label={'Ссылка на личный сайт'}
            placeholder={'https://paveltrety.ru'}
            name={'site'}
            value={siteValue}
            onChange={(event) => setSiteValue(event.target.value)}
          />
        </div>
        <div className={styles.linkFieldsWrapper}>
          <LinkField userInfoRef={userInfoRef} />
          <LinkField userInfoRef={userInfoRef} />
          <LinkField userInfoRef={userInfoRef} />
        </div>
      </div>
    </Card>
  );
};
