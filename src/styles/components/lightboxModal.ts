import { Theme, css } from 'antd-style';

export default (token: Theme) => css`
  body #lightboxModal {
    background-color: var(--popup-overlay);
    background-image: var(--grain);
    backdrop-filter: saturate(120%) blur(80px);
    outline: none;

    > img:not(.modalImageFullscreen) {
      box-shadow: var(--lightbox-img-shadow);
    }

    .modalControls {
      &:hover {
        background-color: transparent;
      }

      .cursor {
        display: flex !important;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;

        color: ${token.colorTextDescription};
        text-shadow: none;

        background-color: transparent;

        transition: var(--button-transition);

        &:hover,
        &:focus {
          color: ${token.colorPrimary};
        }
      }
    }

    .modalPrev,
    .modalNext {
      top: 0;
      transform: translate(0, calc(50% + 63px));

      display: flex;
      align-items: center;
      justify-content: center;

      width: 40px;
      height: 50%;
      padding: 8px;

      color: ${token.colorTextDescription};

      background-color: ${token.colorFillTertiary};
      border-radius: 0 16px 16px 0;

      transition: var(--button-transition);
    }

    .modalNext {
      border-radius: 16px 0 0 16px;
    }

    .modalPrev:hover,
    .modalNext:hover {
      color: ${token.colorPrimary};
      background-color: ${token.colorFillSecondary};
    }
  }
`;
