import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 20px;

  background-color: #0b0b0c;
  border-radius: 0.2rem;

  & + & {
    margin-top: 30px;
  }

  &:hover {
    .skills-header {
      h2 {
        color: var(--green);
      }
    }
  }

  .skills-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 20px;
      font-weight: 400;

      color: var(--white);
    }
  }

  .skills-text {
    font-size: 14px;
    font-weight: 300;

    color: var(--text);
    line-height: 20px;

    margin-top: 20px;

    word-spacing: 10px;
  }

  @media (min-width: 1400px) {
    & + & {
      margin: 0;
    }
    .skills-header {
      h2 {
        font-size: 26px;
      }
    }
    .skills-text {
      font-size: 18px;
      line-height: 25px;
    }
  }
`;
