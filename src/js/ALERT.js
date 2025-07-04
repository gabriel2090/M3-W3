import Swal from "sweetalert2"; // si usas Vite o bundler

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

export function alertsuccess(message) {
    Toast.fire({
        icon: "success",
        title: message
    });
}

export function alerterror(message) {
    Toast.fire({
        icon: "error",
        title: message
    });
}