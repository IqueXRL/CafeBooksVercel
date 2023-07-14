import Logo from '../Logo/index'
import OpcoesHeader from '../OpcoesHeader/index';
import Icones from '../Icones/index'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <Icones/>       
        </HeaderContainer>
    )
}

export default Header