import styled from "styled-components";
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.nav`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    position: fixed;
    justify-content: space-between;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 100;
`;

export const Nav = styled.ul`
    border: 2px solid #CF2E2E;
    background-color: #fff;
    padding: 4px;
    align-items: center;
    display: flex;
    list-style: none;
    border-radius: 8px;
    gap: 8px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 4px;
    padding: 4px 12px;
    position: relative;

    &:hover {
        opacity: 1;
    }

    &[data-link="true"] {
        background-color: #CF2E2E;
    }
`;

export const Logo = styled.img`
  width: 15rem;
`

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-weight: 500;
    position: relative;
    color: #CF2E2E;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
  gap: 0.5rem;

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
        width: 100%;
    }

   &[data-link="true"] {
        color: #fff;

        &::after {
            width: 0;
        }

        &:hover::after {
            width: 0;
        }
    }

    &.active {
        &::after {
        width: 20%;
        }

        &:hover:after {
        width: 100%;
    }
    }
`;
