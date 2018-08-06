import styled from 'styled-components'
import { media } from 'style/containers'

export default styled.div`
    display:flex;
    flex-flow:row wrap;
    flex:0 auto;
    width:100%;
    align-items:center;
    justify-content:space-between;
    margin:.5em 0;
    ${media.phone`
    flex-flow:column wrap;
    justify-content:center;
    > div {
        margin:1em 0;
        width: 100%;
    }
    `}
    ${media.tablet` 
    flex-flow:row wrap;
    justify-content:space-between;
    `}
`