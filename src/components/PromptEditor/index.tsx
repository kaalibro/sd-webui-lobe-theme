import isEqual from 'fast-deep-equal';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import replaceIcon from '@/scripts/replaceIcon';
import { selectors, useAppStore } from '@/store';

import Prompt from './Prompt';

const PromptEditor = memo(() => {
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const { t } = useTranslation();

  useEffect(() => {
    if (setting.svgIcon) replaceIcon();
  }, []);

  return (
    <Flexbox gap={16}>
      {setting.promptEditor && (
        <>
          <span style={{ marginBottom: -10 }}>{t('prompt.positive')}</span>
          <Prompt type="positive" />
          <span style={{ marginBottom: -10 }}>{t('prompt.negative')}</span>
          <Prompt type="negative" />
        </>
      )}
    </Flexbox>
  );
});

export default PromptEditor;
