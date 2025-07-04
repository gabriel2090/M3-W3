const API_URL = "http://localhost:3000/appointments";

export async function getAppointments() {
    const res = await fetch(API_URL);
    return await res.json();
}

export async function createAppointment(data) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return await res.json();
}

export async function updateAppointment(id, data) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return await res.json();
}

export async function deleteAppointment(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

