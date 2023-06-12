import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--unit-12);
  padding: var(--unit-24) var(--unit-20);
  border-bottom: 1px solid var(--golden-primary);
  background-color: #f2f2f2;
  top: 0;
  position: sticky;

  > div {
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 40px;

    > h1 {
      font-size: 2.5rem;
      color: var(--golden-primary);

      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }

    > nav {
      display: flex;
      /* flex-direction: column; */
      gap: var(--unit-16);

      > button {
        .exitIcon {
          color: var(--grey-50);
          transition: 0.4s;

          &:hover {
            color: var(--grey-50-opacity);
            transition: 0.4s;
          }
        }
      }

      > div {
        display: flex;

        > button {
          .shoppingIcon {
            color: var(--grey-50);
            transition: 0.4s;

            &:hover {
              color: var(--grey-50-opacity);
              transition: 0.4s;
            }
          }
        }

        > p {
          cursor: pointer;
          position: absolute;
          top: 12px;
          right: 52px;

          background-color: var(--color-primary);
          border-radius: var(--radius-1);
          color: var(--white);

          display: flex;
          justify-content: center;

          font-family: var(--font-family-1);
          font-size: var(--unit-rem-14);
          font-weight: var(--font-weight-9);
          line-height: var(--font-line-height-1);

          width: fit-content;
          height: var(--unit-20);
          padding: 0 4px;
        }
      }
    }

    > figure > img {
      width: 150px;
    }
  }
`;
