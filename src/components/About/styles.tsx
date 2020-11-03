import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100vh;
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: Center;
  align-items: Center;
  flex-direction: column;

  @media (min-width: 1400px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const Photo = styled.div`
  width: 50%;
  position: relative;
  img {
    width: 100%;
    max-width: 100%;
  }
  #ilustration {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 15px;
    z-index: -2;
  }

  @media (min-width: 1400px) {
    order: 1;
  }
`;

export const AboutText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 50px;

  span {
    color: #1d1d1f;

    display: flex;
    justify-content: center;
    align-items: center;

    .span-icon {
      margin-right: 5px;
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 400;

    text-align: center;

    color: var(--white);
    margin: 10px 0;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    text-align: center;

    color: var(--text);

    line-height: 25px;
  }

  .contact-options {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }
  .icon-option {
    color: #1d1d1f;

    margin: 0 20px;

    padding: 10px;
  }
  .icon-option:hover {
    border-radius: 50%;
    background-color: #000;
    color: var(--green);

    cursor: pointer;
  }

  @media (min-width: 1400px) {
    align-items: flex-start;
    width: 60%;

    h1 {
      width: 300px;
      text-align: left;
    }
    p {
      text-align: left;
      width: 450px;

      font-size: 22px;
      line-height: 30px;
    }
    .contact-options {
      width: 300px;
      justify-content: flex-start;
    }
    .icon-option {
      margin: 0;
    }

    .icon-option + .icon-option {
      margin-left: 15px;
    }
  }
`;
