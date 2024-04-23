import React from 'react'
import styled from '@emotion/styled';
import { theme } from 'antd';

const { useToken } = theme

const StyledApiContainer = styled.div<{ token: any, gutterLess?: boolean }>`
    background-color:${({ token }: any) => token.colorBgContainer};
    padding: ${({ token, gutterLess }: any) => gutterLess ? '0px' : `${token.paddingLG}px`};
    border:  ${({ token, gutterLess }: any) => gutterLess ? '0' : ('1px solid ' + token.colorBorderSecondary)};
    border-radius: ${({ token }: any) => token.borderRadiusLG}px;
    padding-top: 0;
    overflow-x: auto;

    p {
        line-height: 1.8;
    }

    code {
        margin: 0 1px;
        background: #f7f7f8;
        padding: 0.2em 0.4em;
        border-radius: 3px;
        font-size: .9em;
        color: #ff6b72;
        border: 1px solid ${({ token }: any) => token.colorBorderSecondary};
    }

    .api-title {
        margin-top: 24px;
        font-size: ${({ token }: any) => `${token.fontSizeHeading2}px`};
        margin-bottom: 0.5rem;
        line-height: 1.5;

        &.when-to-use {
            margin-top: 24px;
        }

        &.api {
            margin-top: 24px;

            &.h2 {
                border-bottom: 1px solid ${({ token }: any) => token.colorBorderSecondary};
                padding-bottom: 8px;
                margin-bottom: 24px;
            }
        }
    }

    ul {
        padding-left: 0;
        
        >li {
            margin-left: 20px;
            padding-left: 4px;
            list-style-type: circle;
        }
    }

    > hr {
        display: none;
    }

    img {
        max-width: 100%;
    }

    .api-code-highligher {
        margin-bottom: 16px;

        code {
            margin: 0;
            background: transparent;
            padding: 0;
            border-radius: 0;
            font-size: 14px;
            border: 0;
            color: inherit;
        }
    }

    table {
        min-width: 720px;
        width: 100%;
        margin-bottom: 2.5em;
        margin-top: 0.8rem;
        font-size: 13px;
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        line-height: 1.5;
        border: 1px solid ${({ token }: any) => token.colorBorderSecondary};
        border-collapse: collapse;
        border-spacing: 0;

        th {
            padding-top: 14px;
            border-width: 0 0 2px 0;
            color: #5c6b77;
            font-weight: 500;
            white-space: nowrap;
            background: rgba(0, 0, 0, 0.02);
        }

        td:first-of-type {
            width: 20%;
            font-weight: 600;
        }

        th,
        td {
            padding: 12px;
            border-color: ${({ token }: any) => token.colorBorderSecondary};
            border-width: 1px 0;
            border-style: solid;
        }

        tbody tr {
            transition: all 0.3s ease;

            &:hover {
                background: rgba(60, 90, 100, 0.04);
            }
        }
    }
`


const Container = ({ children, gutterLess = false }: { children: any, gutterLess?: boolean }) => {

    const { token } = useToken();

    return (
        <StyledApiContainer token={token} gutterLess={gutterLess}>
            {children}
        </StyledApiContainer>
    )
}

export default Container
