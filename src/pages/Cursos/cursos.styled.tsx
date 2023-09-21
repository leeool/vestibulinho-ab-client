import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.div`
    display: grid;
    margin-bottom: 5rem;
`;

export const Description = styled.span`
    color: #212121;
`;

export const Title = styled.p`
    color: #CF2E2E;
    font-weight: 550;
    font-size: 36px;
`;

export const TagArea = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
`;

export const TagAreaCard = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TagCard = styled.div`
    background-color: #CF2E2E;
    width: fit-content;
    color: #fff;
    border-radius: 8px;
    padding: 3px;
    margin: 5px;
    font-size: 12px;
`;

export const Tag = styled.div`
    background-color: #CF2E2E;
    width: fit-content;
    color: #fff;
    border-radius: 8px;
    padding: 3px;
    margin: 5px;
    font-size: 18px;
`;

export const CardArea = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Card = styled(NavLink)`
    border-radius: 8px;
    border: 2px solid #CF2E2E;
    background-color: #eeeeee;
    width: 12rem;
    margin: 15px;
    box-shadow: -5px 5px #e1e1e1;
    display: flex;
    flex-direction: column;
    text-decoration: none;
`;

export const CardTitle = styled.div`
    background-color: #CF2E2E;
    color: #fff;
    text-align: center;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Indicator = styled.div`
    background-color: #CF2E2E;
    border-bottom-right-radius: 20px;
    width: 2rem;
    padding: 3px 1px 5px 0;
`;

export const Icon = styled.div`
    color: #CF2E2E;
    width: 5rem;
    height: 5rem;
    justify-content: center;
    display: flex;
    margin-left: auto;
    margin-right: auto;
`;