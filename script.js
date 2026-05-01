window.onload = async () => {
    const dd = document.querySelector('#downloadDiv')
    const response = await fetch('https://api.github.com/repos/omeritzics/Updatium/releases/tag/qama-v26.4');
    const tag = (await response.json()).tag_name;
    if (dd) {
        dd.innerHTML = `
        <a type="button" class="btn btn-warning" href="https://github.com/omeritzics/Updatium/releases/download/qama-v26.4/Updatium-Qama-v26.4.apk">Download</a>
        `
    }
}
