import Swal from 'sweetalert2';

const HandleSweetAlert = (funcion, esRevertible = true, ...args) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
        .fire({
            title: '¿Desea confirmar?',
            text: !esRevertible
                ? '¡No podrá revertir esto!'
                : 'Esta acción puede revertirse',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            reverseButtons: true,
            customContainerClass: 'sweet-alert-container',
        })
        .then((result) => {
            if (result.isConfirmed) {
                funcion(...args);
                swalWithBootstrapButtons.fire(
                    '¡Operación exitosa!',
                    'Los cambios han sido guardados correctamente',
                    'success'
                );
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Operación cancelada por el usuario',
                    'error'
                );
            }
        });
};

export default HandleSweetAlert;
