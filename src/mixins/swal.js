import Swal from 'sweetalert2'

export default function ShowNotification(style, text) {
  Swal.fire({
    position: 'top-end',
    title: text,
    icon: `${style}`,
    timer: 1500,
    toast: true,
    color: '#14213d',
    background: '#fef8e2',
    showConfirmButton: false,
    timerProgressBar: true
  })
}
