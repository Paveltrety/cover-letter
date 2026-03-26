import styles from './VacancyLink.module.scss';
import classNames from 'classnames';
import { Tooltip } from 'react-tooltip';
import ExternalLinkIcon from '@/assets/externalLink.svg';
import { useId } from 'react';

interface ICopyProps {
  link: string;
  className?: string;
}

export const VacancyLink = ({ className, link }: ICopyProps) => {
  const uniqId = useId();

  return (
    <>
      <Tooltip id={uniqId} content="Открыть вакансию" anchorSelect={`#${uniqId}`} />
      <a className={classNames(styles.root, className)} href={link} id={uniqId} target="blank">
        <ExternalLinkIcon />
      </a>
    </>
  );
};
