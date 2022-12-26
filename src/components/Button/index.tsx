import style from './Botao.module.scss'

// interface text {
//     text : string
// }

const Button = (props : any) => {
 
    return(
        <button className={style.button}>
            {props.children}
        </button>
    )
}


export default Button;