# console.qrcode

實作`console.qrcode`方法達成在Browser Console顯示QRCode圖片

-----
## 方法參數
除了可以直接在`console.qrcode`方法中直接帶入文字輸出外，也可以使用[qrcodejs](https://github.com/davidshimjs/qrcodejs)中的參數。
```typescript
declare interface Console {
    qrcode(text: string | { //可直接帶入文字，使用預設的設定產生QRCode
        text: string,
        width: number, //可設定圖片長寬
        height: number,
        colorDark?: string, //暗色
        colorLight?: string, //亮色
        correctLevel?: any, //容錯
    }): void;
}
```

## 演示
![Imgur](http://i.imgur.com/OPp7qLF.png)

## 參考
1. [console.image](https://github.com/adriancooney/console.image) : 用以輸出圖片在Console
2. [qrcodejs](https://github.com/davidshimjs/qrcodejs) : 產生QRCode圖片
