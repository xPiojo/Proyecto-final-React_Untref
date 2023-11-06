import Swal from 'sweetalert2';

export const errorAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los datos en pantalla antes de cotizar.',
        customClass: 'swal-wide'
    });
};

export const successAlert = () => {
    Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Cotización terminada con éxito.',
        customClass: 'swal-wide'
    });
};

export const infoAlert = () => {
    Swal.fire({
        icon: 'info',
        title: 'Información',
        text: 'Cotización guardada',
        customClass: 'swal-wide'
    });
};


