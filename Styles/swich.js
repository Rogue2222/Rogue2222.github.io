function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'Styles/style.css') {
        theme.setAttribute('href', 'Styles/DStyle.css');
    } else {
        theme.setAttribute('href', 'Styles/style.css');
    }
}