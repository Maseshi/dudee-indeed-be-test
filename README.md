<div align="center">
  <h1>Fibonacci Sequence</h1>
  <p>API สำหรับคำนวณค่า <a href="https://en.wikipedia.org/wiki/Fibonacci_sequence">Fibonacci Sequence</a> ตั้งแต่ช่วง (1 - 100) ซึ่งโปรเจคสร้างขึ้นด้วย <a href="https://nextjs.org/">Next.js</a></p>
</div>

## 🔨 ข้อกำหนดขั้นต่ำ

- [Node.js](https://nodejs.org): 18.18 มากกว่าหรือเท่ากับ

## 🔥 เริ่มต้นโปรเจค

เริ่มพัฒนาโปรเจคกับเฟรมเวิร์ค [Next.js ](https://nextjs.org/) เพื่อช่วยให้พัฒนาง่ายขึ้น

1. ติดตั้งส่วนประกอบที่จำเป็นของโปรเจคด้วยคำสั่ง

```sh
npm install
```

2. เริ่มพัฒนาโปรเจคด้วยการเปิดเซิร์ฟเวอร์พัฒนาด้วยคำสั่ง

```sh
npm run dev
```

3. เปิดเว็บไซต์ที่ http://localhost:3000

คุณสามารถเริ่มแก้ไขโค้ดได้ที่ `app/route.ts` เมื่อโค้ดมีการเปลี่ยนจะรีโหลดให้โดยอัตโนมัติ **(Hot Reload)**

## 🏗️ สร้างโปรเจค

สร้างโปรเจคหรือ Build โปรเจคเพื่อนำไปใช้จริง เนื่องจากประสิทธิภาพจะดีกว่าการรันคำสั่งสำหรับพัฒนา

1. ทำการ Build โปรเจคด้วยคำสั่ง

```sh
npm run build
```

2. เปิดโปรเจคที่ได้ Build เสร็จแล้วด้วยคำสั่ง

```sh
npm start
```

3. เปิดดูตัวอย่างเว็บไซต์ได้ที่ http://localhost:3000

หากโค้ดมีการเปลี่ยนแปลงจากการ Build ล่าสุด คุณจำเป็นต้องรัน `npm run build` ใหม่เพื่อให้การเปลี่ยนแปลงมีผล

## 📚️ ศึกษาเพิ่มเติม

คุณสามารถศึกษาวิธีการพัฒนา API ได้ผ่านเอกสารของ Next.js ในหัวข้อ [route.js file convention](https://nextjs.org/docs/app/api-reference/file-conventions/route)
