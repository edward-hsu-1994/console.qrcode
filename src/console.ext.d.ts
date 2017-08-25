declare interface Console {
    qrcode(text: string | {
        text: string,
        width: number,
        height: number,
        colorDark?: string,
        colorLight?: string,
        correctLevel?: any,
    }): void;
    image(url: string): void;
}