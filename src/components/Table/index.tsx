import React from 'react';
import styled from 'styled-components';

interface TableProps {
    primary?: boolean;
    size: 'medium' | 'large'
}

const Table = ({ primary = false, size = 'medium' }: TableProps) => {
    const mode = primary ? 'primary' : 'secondary';
    return (
        <StyledTable className={mode + ' ' + size}>
            <h1>teste</h1>
        </StyledTable>
    )
}

const StyledTable = styled.table`    
    &.primary{
        background-color:red;    
    }
    &.secondary{
        background-color:blue;    
    }
    &.medium{
            width:50vw;        
        }
        &.large{
            width:100vw
        }
`
export default Table;