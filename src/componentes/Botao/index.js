import './Botao.css'

const Botao = (props) => {
    return (
        <button className='botao__container'>
            {props.children}
        </button>
    )
}

export default Botao