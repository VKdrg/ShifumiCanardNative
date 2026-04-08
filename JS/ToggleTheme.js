export function ToggleTheme() {
    const body = document.body
    // const icon = document.getElementsByClassName('fa-circle-half-stroke')

    body.classList = "light" ? "dark" : "light"
}