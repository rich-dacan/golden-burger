import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  max-width: 1500px;
  margin: 0 auto;
  gap: var(--unit-12);
  padding: var(--unit-24) var(--unit-20);
  border-bottom: 1px solid var(--golden-primary);
  background-color: #f2f2f2;
  top: 0;
  position: sticky;
  z-index: 1;

  > div {
    display: flex;
    justify-content: space-between;

    align-items: center;
    height: 40px;

    > span {
      display: flex;
      align-items: center;

      > h1 {
        font-size: 2.5rem;
        color: var(--golden-primary);
        margin-left: 8px;
      }

      > img {
        width: 50px;
      }

      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    }

    > nav {
      display: flex;
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
          top: 18px;
          right: 57px;

          background-color: var(--golden-primary);
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
