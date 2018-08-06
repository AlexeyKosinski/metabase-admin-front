import styled from 'styled-components'
import { media } from 'style/containers'

export default styled.div`
    display:flex;
    flex-flow:column wrap;
    flex:0 0.48 48%;
    margin-bottom:0.5em;
    ${media.phone`
    flex:0 auto;
    width:100%;
    `}
    ${media.tablet` 
    flex:0 0.48 48%;
    width:auto;
    `}
`