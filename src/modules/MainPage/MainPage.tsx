import { useMutation } from '@tanstack/react-query';
import styles from './MainPage.module.scss';
import { useState } from 'react';
import { Input } from '../../components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/Card/Card';
import { Result } from './components/Result/Result';
import { useParseVacancy } from '@/hooks/requests/useParseVacancy';
import { generateCoverLetterRequest } from '@/api/requests';
import { getInfoFromVacancyLink } from '@/utils/getInfoFromVacancyLink';
import { useForm } from '@tanstack/react-form';
import { Loading } from './components/Loading/Loading';
import { Text } from './components/Text/Text';
import { normalizeResult } from './normalizeResult';
import type { IParseVacancyRequestParams } from '@/api/types';

export interface IForm {
  link: string;
  telegram: string;
  site: string;
  github: string;
}

export const MainPage = () => {
  const [result, setResult] = useState<string>('');

  const parseVacancy = useParseVacancy();

  const generateCoverLetter = useMutation({
    mutationFn: generateCoverLetterRequest,
  });

  const form = useForm({
    defaultValues: {
      link: '',
      telegram: '',
      site: '',
      github: '',
    },
    onSubmit: async ({ value: data }) => {
      if (result) {
        setResult('');
      }
      const info = getInfoFromVacancyLink(data.link);

      if (!info.aggregatorType) {
        return;
      }

      const { vacancyId } = await parseVacancy.mutateAsync(info as IParseVacancyRequestParams);

      const { covertLetter } = await generateCoverLetter.mutateAsync({ vacancyId });
      setResult(normalizeResult(covertLetter, data));
    },
  });

  const isLoading = generateCoverLetter.isPending || parseVacancy.isPending;

  return (
    <Card>
      <div className={styles.root}>
        <Text />
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            e.stopPropagation();
            await form.handleSubmit();
          }}
          className={styles.form}
        >
          <div className={styles.contactInputs}>
            <form.Field name="telegram">
              {({ name, handleChange, state: { value } }) => (
                <Input
                  className={styles.input}
                  label="Ваш Telegram"
                  name={name}
                  placeholder="paveltrety"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                />
              )}
            </form.Field>
            <form.Field name="github">
              {({ name, handleChange, state: { value } }) => (
                <Input
                  className={styles.input}
                  label="Сссылка на GitHub"
                  name={name}
                  placeholder="https://github.com/Paveltrety"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                />
              )}
            </form.Field>
            <form.Field name="site">
              {({ name, handleChange, state: { value } }) => (
                <Input
                  className={styles.input}
                  label="Сссылка на личный сайт"
                  name={name}
                  placeholder="https://paveltrety.ru"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                />
              )}
            </form.Field>
          </div>
          <form.Field
            name="link"
            validators={{
              onSubmit: ({ value }) => {
                if (!value) return 'Введите ссылку на вакансию';

                const info = getInfoFromVacancyLink(value);

                if (!info.id || !info.aggregatorType) {
                  return 'Поддерживаются ссылки hh.ru/vacancy/... и getmatch.com|ru/vacancies/...';
                }

                return undefined;
              },
            }}
          >
            {({ name, handleChange, state: { value, meta } }) => (
              <Input
                className={styles.input}
                label="Сссылка на вакансию"
                name={name}
                placeholder="https://hh.ru/vacancy/0000001"
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                error={meta.errors[0]}
                required
              />
            )}
          </form.Field>

          <Button type="submit" isDisabled={isLoading} text="Получить" />
        </form>

        <Loading isLoading={isLoading} text={parseVacancy.isPending ? 'Получаем информацию о вакансии' : 'Генерируем лучшее письмо'} />

        {result && <Result content={result} />}
      </div>
    </Card>
  );
};
