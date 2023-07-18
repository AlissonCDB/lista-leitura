import { styled } from 'styled-components'

const ListaSuspensaContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 35px;
    width: 50%;

    label{
        display: block;
        font-size: 24px;
        margin-bottom: 10px;
    }
`
const FundoDoSelect = styled.div`
    width: 80%;
    background-color: cyan;
    box-shadow: 10px 10px 30px rgba(61, 58, 235, 0.959);
    box-sizing: border-box;
    border-radius: 50px;
    padding: 24.5px;

    select{
        background-color: cyan;
        width: 95%;
        border: none;
        text-align: center;
        font-size: 24px;

        &:focus{
            outline: none;
        }
    }
`

const ListaSuspensa = (props) => {
    
    return (
        <ListaSuspensaContainer>
            <label>{props.label}</label>
            <FundoDoSelect>
            <select onChange={props.aoAlterado} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
            </FundoDoSelect>
        </ListaSuspensaContainer>
    )
}

export default ListaSuspensa