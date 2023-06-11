import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled.button`
  &.golden-button-default {
    background-color: var(--golden-primary);
    border: solid 1px var(--golden-primary);
    border-radius: var(--radius-1);

    color: var(--grey-0);
    font-size: var(--unit-rem-16);
    font-weight: var(--font-weight-6);
    line-height: var(--font-line-height-1);

    height: 48px;
    width: 100%;
    margin: 0 0 22px;
    padding: 0 16px;
    transition: 0.4s;
  }

  &.golden-button-default:hover {
    transition: 0.4s;
    background-color: var(--golden-secondary);
    border: solid 1px var(--golden-secondary);
  }

  /* GRAY BUTTON */
  &.gray-button-default {
    background-color: var(--grey-20);
    border: solid 1px var(--grey-20);
    border-radius: var(--radius-1);

    color: var(--grey-50);
    font-size: var(--unit-rem-16);
    font-weight: var(--font-weight-6);
    line-height: var(--font-line-height-1);

    height: 48px;
    width: 100%;
    margin: 0 0 22px;
    padding: 0 16px;
    transition: 0.8s;
  }

  &.gray-button-default:hover {
    transition: 0.8s;
    color: var(--grey-0);
    background-color: var(--grey-50);
    border: solid 1px var(--grey-50);
  }
`;

export const StyledLink = styled(Link)`
  &.grey-Link {
    background-color: var(--grey-20);
    border: solid 1px var(--grey-20);
    border-radius: var(--radius-1);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--golden-primary);
    font-size: var(--unit-rem-16);
    font-weight: var(--font-weight-6);
    line-height: var(--font-line-height-1);

    height: 48px;
    width: 100%;
    padding: 0 16px;
    transition: 0.8s;
  }

  &.grey-Link:hover {
    transition: 0.8s;
    background-color: var(--golden-primary);
    border: solid 1px var(--grey-50);
    color: var(--golden-primary);
  }
`;
