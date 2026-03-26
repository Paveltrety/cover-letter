import { useEffect, useRef, useState } from 'react';
import { useUpdateEffect, useWindowSize } from 'react-use';

import styles from './Result.module.scss';
import { Copy } from '@/components/ui/Copy/Copy';
import AngleUpIcon from '@/assets/angleUp.svg';

import 'react-tooltip/dist/react-tooltip.css';
import { VacancyLink } from '@/components/ui/VacancyLink/VacancyLink';
import classNames from 'classnames';

const DEFAULT_MAX_HEIGHT = '0px';
const COLLAPSED_HEIGHT = '120px';

export interface IFaqAccordionProps {
  className?: string;
  content: string;
  link: string;
}

export const Result = ({ content, link }: IFaqAccordionProps) => {
  const { width } = useWindowSize();

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>(DEFAULT_MAX_HEIGHT);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(COLLAPSED_HEIGHT);
    } else {
      setMaxHeight(DEFAULT_MAX_HEIGHT);
    }
  }, [content]);

  useUpdateEffect(() => {
    if (contentRef.current) {
      if (isExpanded) {
        setMaxHeight(`${contentRef.current.scrollHeight + 20}px`);
      }
    }
  }, [width]);

  const toggle = () => {
    setIsExpanded((prev) => {
      if (!prev) {
        setMaxHeight(`${(contentRef.current?.scrollHeight || 0) + 20}px`);
      } else {
        setMaxHeight(COLLAPSED_HEIGHT);
      }
      return !prev;
    });
  };

  return (
    <div
      className={classNames(styles.root, {
        [styles.expanded]: isExpanded,
      })}
    >
      <div className={styles.header}>
        <Copy content={content} />
        <VacancyLink link={link} />
      </div>
      <div className={styles.blurWrapper}>
        <div
          className={styles.wrapper}
          style={{
            maxHeight,
          }}
          ref={contentRef}
        >
          <span className={styles.content}>{content}</span>
        </div>
      </div>
      <button className={styles.toogleButton} onClick={toggle}>
        <AngleUpIcon className={styles.angleIcon} />
      </button>
    </div>
  );
};
