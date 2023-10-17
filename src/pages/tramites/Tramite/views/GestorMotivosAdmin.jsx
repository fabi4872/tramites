import MotivosABM from '../components/GestorMotivos/MotivosABM';
import Header from '../components/shared/Header';

const GestorMotivosAdmin = () => {
    return (
        <>
            <Header titulo={ 'Gestor de Trámites' } esGestor={ true } />
            <MotivosABM />
        </>
    )
}

export default GestorMotivosAdmin;
