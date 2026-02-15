import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';

import styles from './Result.module.scss';
import { Copy } from '@/components/ui/Copy/Copy';

const DEFAULT_MAX_HEIGHT = '0px';

export interface IFaqAccordionProps {
  className?: string;
  content: string;
}

export const Result = ({ content }: IFaqAccordionProps) => {
  const { width } = useWindowSize();

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<string>(DEFAULT_MAX_HEIGHT);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight(DEFAULT_MAX_HEIGHT);
    }
  }, [content, width]);

  return (
    <div
      className={styles.root}
      style={{
        maxHeight,
      }}
      ref={contentRef}
    >
      <div className={styles.header}>
        <Copy content={content} />
      </div>
      <span className={styles.content}>{content}</span>
    </div>
  );
};
