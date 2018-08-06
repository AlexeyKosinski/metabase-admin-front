import styled from 'styled-components'
import { media } from 'style/containers'

export default styled.div`
    display:flex;
    flex-flow:row wrap;
    flex:0 auto;
    align-items:center;
    justify-content:space-between;
    ${media.phone`
    flex-flow:column wrap;
    justify-content:center;
    `}
    ${media.tablet` 
    flex-flow:row wrap;
    justify-content:space-between;
    `}
`