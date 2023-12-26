import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  promptView: css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    button {
      color: var(--button-secondary-text-color);
      transition: var(--button-transition);
    }
  `,
}));
