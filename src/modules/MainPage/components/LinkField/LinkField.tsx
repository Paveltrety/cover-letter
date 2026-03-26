import { Button } from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { memo, useId, useState } from 'react';
import { useCoverLetterRequest } from '../../useCoverLetterRequest';
import { Loading } from '../Loading/Loading';
import { Result } from '../Result/Result';
import styles from './LinkField.module.scss';
import { Toaster } from '@/components/ui/Toaster';
import { getInfoFromVacancyLink } from '@/utils/getInfoFromVacancyLink';
import { useUpdateEffect } from 'react-use';
import { normalizeResult } from './normalizeResult';
import type { IParseVacancyRequestParams } from '@/api/types';
import type { IUserInfo } from '@/types/common';
import classNames from 'classnames';

interface ILinkFieldProps {
  userInfoRef: React.RefObject<IUserInfo>;
}

const LinkFieldInner = ({ userInfoRef }: ILinkFieldProps) => {
  const [linkValue, setLinkValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  const uniqName = useId();

  const { isLoading, isParseVacancyPending, handleCoverLetterRequest } = useCoverLetterRequest();

  const handleClickbutton = async () => {
    if (!linkValue) {
      setError('Введите ссылку на вакансию');
      return;
    }

    setResult('');

    const info = getInfoFromVacancyLink(linkValue);
    if (!info.id || !info.aggregatorType) {
      Toaster.error('Поддерживаются ссылки hh.ru/vacancy/... и getmatch.com/...');
      return;
    }

    const result = await handleCoverLetterRequest(info as IParseVacancyRequestParams);

    if (result) {
      setResult(normalizeResult(result, userInfoRef.current));
    }
  };

  useUpdateEffect(() => {
    if (error) {
      setError('');
    }
    if (result) {
      setResult('');
    }
  }, [linkValue]);

  return (
    <div>
      <div className={styles.inputWrapper}>
        <Input
          className={styles.input}
          label="Ссылка на вакансию"
          placeholder="https://hh.ru/vacancy/0000001"
          value={linkValue}
          onChange={(e) => setLinkValue(e.target.value)}
          name={uniqName}
          disabled={isLoading}
          error={error}
          required
          onClear={() => {
            setLinkValue('');
            setResult('');
          }}
        />
        <Button
          onClick={handleClickbutton}
          className={classNames(styles.button, {
            [styles.hasError]: !!error,
          })}
          isDisabled={isLoading}
          text="Получить"
        />
      </div>
      <Loading isLoading={isLoading} text={isParseVacancyPending ? 'Получаем информацию о вакансии' : 'Генерируем лучшее письмо'} />

      {result && <Result link={linkValue} content={result} />}
    </div>
  );
};

export const LinkField = memo(LinkFieldInner);
