import React from 'react'
import styled from 'styled-components';


const TitleStyled = styled.div`

    h2{
        font-size:50px;

        .orange{
            color:#ff5912;
        }

        .blue{
            color:'#34404b
        }
    }

`


function Title({props}) {
    return (
        <div>
            <TitleStyled>
                <span className='orange'>{props.children}</span>
                <span className='blue'>{props.children}</span>
            </TitleStyled>
        </div>
    )
}

export default Title
