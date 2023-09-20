import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavStyle = styled.div`
    background-color: #fff;
    height: 15px;
    width: 500px;
    padding: 10px 20px;
    border-radius: 8px;
    border: 2px solid #CF2E2E;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
        margin: 0 10px;
    }
`;

export const Insc = styled.li`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 28px;
    background-color: #CF2E2E;
    border-radius: 4px;
    color: #fff;
    padding: 0 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #CF2E2E;
    font-weight: 500;
    position: relative;
    padding-bottom: 5px;

    ${Insc} & {
        color: #fff;
        height: 70%;
    }

    &:hover {
        opacity: 1;
    }

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background-color: #CF2E2E;
        transition: width 0.3s;
    }

    &:hover:after {
        width: 60px;
    }

    ${Insc} & {
        color: #fff;
        
        &:hover:after {
            width: 0;
        }
    }
`;