import styles from './Text.module.scss';

export const Text = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Сгенерируйте сопроводительное письмо для вакансии</h1>
      <span className={styles.description}>
        Сервис помогает быстро создать сопроводительное письмо для отклика на вакансию по ссылке. Он анализирует описание вакансии и
        автоматически пишет подходящий текст под требования работодателя. Это экономит время и помогает отправлять более точные и
        качественные отклики без ручного написания.
      </span>
      <br />
      <span className={styles.description}>
        Поддерживаются вакансию с <b>hh.ru</b> и <b>getmatch</b>
      </span>
    </div>
  );
};
