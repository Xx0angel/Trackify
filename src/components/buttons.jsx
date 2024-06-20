// Boton Componente
import '../styles/button.css'

const Button = ({ texto }) => {
    return (
        <button className="btn">
            {texto}
        </button>
    );
};

export default Button;
