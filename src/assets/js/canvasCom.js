// Functionality: render image to canvas.
function renderImageToCanvas(img){
    img.onload = function() {
        let canvas = document.getElementById("imageContainer")
        let ctx = canvas.getContext("2d")

        ctx.drawImage(img, 0, 0)
    }
}

// Functionality: paint canvas with image, response is base64 image.
export function paintCanvas(response){
    // Render image to canvas.
    let base64_image = response
    let img = new Image()
    img.src = "data:image/jpg;base64," + base64_image

    renderImageToCanvas(img)
}