import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;

    & > * + * {
        margin-top: 1rem;
    }

    figure {
        max-width: 6rem;
        max-height: 6rem;
    }

    button {
        width: 15rem;
        height: 3rem;
    }
`;
