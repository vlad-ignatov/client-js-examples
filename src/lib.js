export function display(data) {
    document.body.innerText =
        data instanceof Error ? String(data) : JSON.stringify(data, null, 4);
}

export function crearSessionAfterFiveLoads() {
    let count = sessionStorage.count || 0;
    if (++count <= 5) {
        sessionStorage.count = count + 1;
    } else {
        sessionStorage.clear();
    }
}
