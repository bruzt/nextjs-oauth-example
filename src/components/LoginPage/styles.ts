import styled from 'styled-components';

const elementsRadius = '0.3rem';

export const Container = styled.div`
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 20rem;
    }

    form > * + div {
        margin-top: 1rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
    }

    input {
        height: 3rem;

        font-size: 1.5rem;
        color: ${props => props.theme.color};

        border: 0;
        border-radius: ${elementsRadius};
        box-shadow: 1px 1px 0 1px #111;

        padding: 0 0.5rem;
        background-color: ${props => props.theme.background};
        filter: brightness(0.5);
    }

    form hr {
        margin-top: 1rem;
    }

    button {
        width: 100%;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;
        
        color: ${props => props.theme.color};
        margin-top: 1rem;
        border: 0;
        border-radius: ${elementsRadius};

        background-color: ${props => props.theme.success};

        font-weight: bold;

        &:hover {
            filter: brightness(1.1);
        }

        &:active {
            filter: brightness(1.2);
        }
    }

    button[type=submit] {
        margin-top: 1.5rem;
    }

    button span {
        margin-left: 0.5rem;
    }

    button.google-login {
        background-color: ${props => props.theme.googleRed};
    }

    button.facebook-login {
        background-color: ${props => props.theme.facebookBlue};
    }
`;
