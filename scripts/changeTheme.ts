export const changeThemeColor = () => {
    const themeSelect: HTMLSelectElement = document.querySelector('#select-theme')

    themeSelect.onchange = function () {
        document.documentElement.className = ''
        document.documentElement.classList.add(themeSelect.value)
    }

}
