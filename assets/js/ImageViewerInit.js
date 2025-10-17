Viewer.setDefaults({
    url: "data-original",
    navbar: false,
    toolbar: false,
    fullscreen: false,
    loop: false,
    // movable: false,
    rotatable: false,
    scalable: false,
    transition: false
})
const toView = document.getElementsByClassName("image-viewer")
Array.from(toView).forEach((el) => {
    const localViewer = new Viewer(el)
})