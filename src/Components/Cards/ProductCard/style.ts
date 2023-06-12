import styled from "styled-components";

export const Wrapper = styled.li`
  border: solid 2px var(--golden-secondary);
  border-radius: var(--radius-2);
  overflow: hidden;
  transition: 0.8s;

  &:hover {
    transform: scale(0.98);
    transition: 0.8s;
    box-shadow: 9px 9px 23px -6px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 9px 9px 23px -6px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 9px 9px 23px -6px rgba(0, 0, 0, 0.5);
  }

  > figure {
    background-color: var(--grey-20);
    display: flex;
    justify-content: center;
    height: 177px;
  }

  > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: var(--unit-14);
    margin: var(--unit-14) var(--unit-14);

    > h2 {
      font-size: 1.3rem;
      max-width: 18ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    > p {
      font-size: 1rem;
    }

    > .golden-button-default {
      height: var(--unit-40);
      width: fit-content;
      margin-bottom: var(--unit-4);
    }
  }

  @media (min-width: 375px) {
    width: 290px;
    height: max-content;
  }

  @media (min-width: 640px) {
    margin: 1.5%;
  }
`;
