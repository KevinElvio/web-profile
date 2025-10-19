import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
})

export const SuccessNotif = async (title, text = '') => {
    await Toast.fire({
        icon: 'success',
        title: title,
        text: text
    })
    
}