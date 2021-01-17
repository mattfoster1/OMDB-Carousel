import styled from 'styled-components';

const breakpoints = {
    sm: 642, 
    md: 1026, 
    lg: 1442, 
    xl: 1922, 
    xxl: 2560
}

const minWidth = {
    sm: `(min-width: ${breakpoints.sm}px)`,
    md: `(min-width: ${breakpoints.md}px)`,
    lg: `(min-width: ${breakpoints.lg}px)`,
    xl: `(min-width: ${breakpoints.xl}px)`,
    xxl: `(min-width: ${breakpoints.xxl}px)`,
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    @media ${minWidth.sm} {
        flex-direction: row;
    }
`;



const Main = styled.main`
    background-color: green;
    width: 100%;
    max-width: 66.66%;
`;

const Aside = styled.aside`
    background-color: palegoldenrod;
    width: 100%;
    max-width: 33.33%;
`;

export {Container, Main, Aside, }