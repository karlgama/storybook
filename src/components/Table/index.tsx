import React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface TableProps {
    primary?: boolean;
    size: 'medium' | 'large';
    color?: string;
    tableFields?: string[]
}

interface TrProps {
    primary?: boolean
}

const Table = ({ primary = false, size = 'medium', tableFields, color }: TableProps) => {
    const mode = primary ? 'primary' : 'secondary';
    return (
        <StyledTable color={color} className={mode + ' ' + size}>
            <StyledTr className={mode}>
                {tableFields
                    ? tableFields.map(field => <StyledTh className={mode}>{field}</StyledTh>)
                    : <StyledTh className={mode}>Título do campo</StyledTh >}

            </StyledTr>
        </StyledTable>
    )
}

const StyledTable = styled.table`    
    &.primary{
        background-color:#212529;        
        color:${(props) => props.color || '#fff'}        
    }
    &.secondary{
        background-color:#fff;
        border:solid 1px #000;
        color:${(props) => props.color || '#000'}
    }
    &.medium{
            width:50vw;        
        }
        &.large{
            width:100vw
        }
`;

const StyledTr = styled.tr`
     &.primary{
        border:none;
     }
     &.secondary{
        border:solid 1px #000;
     }
`;

const StyledTh = styled.th`
     &.primary{
        border:none;
     }
     &.secondary{
        border:solid 1px #000;
     }
`;

export default Table;