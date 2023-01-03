import style from './Botao.module.scss'

// interface text {
//     text : string
// }

const Button = (text: string, type?:"button" | "submit" | "reset" | undefined) => {
 
    return(
        <button type={type} className={style.button}>
            {text}
        </button>
    )
}


export default Button;