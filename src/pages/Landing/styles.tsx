import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  footer {
    display: Flex;
    justify-content: center;
    align-items: center;

    margin: 20px;
    p {
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #1d1d1f;
    }
  }
  .container {
    max-width: 80%;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const Header = styled.header`
  height: 80px;

  display: flex;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 22px;
    font-weight: 300;

    color: var(--white);
    strong {
      font-weight: 700;
    }
  }

  .social-media-items {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-item {
    width: 24px;
    height: 24px;
    margin: 0 10px;
    color: var(--white);
    span {
      display: none;
    }
  }

  .btn-item:hover {
    color: var(--green);
  }

  @media (min-width: 1400px) {
    .btn-item:first-child {
      margin-right: 40px;
    }
    .btn-item {
      width: 100%;
      display: flex;
      align-items: center;
      span {
        display: unset;
        margin-left: 5px;
      }
    }
  }
`;

export const Hero = styled.div`
  height: 80vh;

  display: flex;
  justify-content: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img {
    margin: 100px 0;
  }
  .hero-text {
    font-size: 36px;
    font-weight: 500;

    text-align: center;
    line-height: 40px;

    color: var(--white);
  }
  span {
    position: relative;
  }
  span::after {
    content: "";
    width: 220px;
    height: 6px;
    background-color: var(--green);
    position: absolute;
    left: 0;
    top: 25px;
  }

  @media (min-width: 1400px) {
    .container {
      justify-content: space-between;
      flex-direction: row;
    }
    img {
      order: 1;
    }

    .hero-text {
      text-align: left;
      width: 600px;
      font-size: 48px;
      line-height: 50px;
    }
    span:after {
      width: 295px;
      top: 32px;
    }
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 20px;
  padding: 50px 0;
  @media (min-width: 1400px) {
    .container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
    }
  }
`;
