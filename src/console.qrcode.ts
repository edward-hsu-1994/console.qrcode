declare var QRCode;
console.qrcode = function (
    text: string | {
        text: string,
        width: number,
        height: number,
        colorDark?: string,
        colorLight?: string,
        correctLevel?: any,
    }): void {
    let tempElement = document.createElement("div");

    new QRCode(tempElement, text);

    console.image(tempElement.querySelector("img").src || tempElement.querySelector("canvas").toDataURL());
}