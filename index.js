
const refreshBtn = document.querySelector(".refresh-btn");
const container = document.querySelector('.container')

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; // clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
        // generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, 0)}`;

        // creating a new  li element and inserting it to a container
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `  <div class="rect-box" style="background:${randomHex};"></div>
                             <span class="hex-value">${randomHex}</span>`;
        //adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color);
    }

}
generatePalette()

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = 'Copied';
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(()=> alert("Failed to copy the color code"));//showing alert
}

refreshBtn.addEventListener('click', generatePalette)

