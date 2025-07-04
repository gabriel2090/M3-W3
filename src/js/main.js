import {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment
} from "./API.js";

import { alertsuccess, alerterror } from "./ALERT.js";

const $form = document.getElementById("form");
const $appointmentsList = document.getElementById("appointments-list");

const $nameperson = document.getElementById("nombre_del_producto");
const $price = document.getElementById("prico");
const $datecite = document.getElementById("date_cite");
const $description = document.getElementById("description");

let editingId = null;


loadAppointments();


$form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const appointment = {
        
        nombre_del_producto: $nameperson.value,
        precio: $price.value,
        date: $datecite.value,
        
        description: $description.value
    };

    try {
        if (editingId) {
            await updateAppointment(editingId, appointment);
            alertsuccess("Cita actualizada con éxito");
        } else {
            await createAppointment(appointment);
            alertsuccess("Cita creada exitosamente");
        }

        $form.reset();
        editingId = null;
        loadAppointments();
    } catch (error) {
        console.error(error);
        alerterror("Hubo un error al guardar la cita");
    }
});


async function loadAppointments() {
    const appointments = await getAppointments();
    $appointmentsList.innerHTML = "";

    appointments.forEach((appt) => {
        const div = document.createElement("div");
        div.classList.add("appointment");

        div.innerHTML = `
            
            <p><strong>PRODUCTO:</strong> ${appt.nombre_del_producto }</p>
            <p><strong> PRECIO:</strong> ${appt.precio}</p>
            <p><strong>FECHA:</strong> ${appt.date}</p>
            
            <p><strong>Descripción:</strong> ${appt.description}</p>
            <button class="edit">Editar</button>
            <button class="delete">Eliminar</button>
        `;

        div.querySelector(".edit").addEventListener("click", () => {
            
            $nameperson.value = appt.nombre_del_producto;
            $price.value = appt.price;
            $datecite.value = appt.date;
            
            $description.value = appt.description;
            editingId = appt.id;
        });


        div.querySelector(".delete").addEventListener("click", async () => {
            try {
                await deleteAppointment(appt.id);
                alertsuccess("Cita eliminada");
                loadAppointments();
            } catch (error) {
                console.error(error);
                alerterror("No se pudo eliminar la cita");
            }
        });

        $appointmentsList.appendChild(div);
    });
}
