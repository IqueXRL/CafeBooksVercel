import logo from '../../imagens/LogoCafe.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    background-color: #FFF;
    display: flex;
    font-size: 30px;
`
const LogoImage = styled.img`
    margin-right: 10px;
    max-width:70px;
    max-height:70px;

`



function Logo(){
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='Logo'></LogoImage>
            <p><strong>Café</strong>Books</p>
       </LogoContainer>
    )
}

export default Logo