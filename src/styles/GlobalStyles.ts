import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        height: 100vh;

        background-color: var(--dark);

        overflow-x: hidden;

        font-family: 'Poppins', sans-serif;
    }

    a{
        text-decoration: none;
    }

    button{
        background:none;
        border:none;
    }

    :root{
        --green: #64DF45;
        --dark: #060606;
        --white: #E5E5E5;
        --text: #575757;
    }
`;
