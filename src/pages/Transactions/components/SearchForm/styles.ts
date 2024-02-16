import styled from "styled-components"

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input{
        flex: 1;
        border-radius:6px;
        border: 0;
        background: ${({theme})=>theme['gray-900']};
        color: ${({theme})=>theme['gray-300']};
        padding: 1rem;
        
        &::placeholder{
            color: ${({theme})=>theme['gray-500']};
        }
    }

    button{
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem;
        border: 1px solid ${({theme})=>theme['green-300']};
        border-radius: 6px;
        color: ${({theme})=>theme['green-300']};
        background: transparent;
        font-weight: bold;
        cursor: pointer;

        &:disabled{
            opacity: 0.4;
            cursor: not-allowed;
        }

        &:not(:disabled):hover{
            border: 1px solid ${({theme})=>theme['green-500']};
            color: ${({theme})=>theme.white};
            background: ${({theme})=>theme['green-500']};
            transition: background-color 0.2s , color 0.2s;
        }
    }


`