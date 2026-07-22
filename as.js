const dishes = [
    { name: "กระเพราหมูกรอบ", emoji: "🍳" },
    { name: "ซูชิ", emoji: "🍣" },
    { name: "ผัดไทย", emoji: "🍜" },
    { name: "ชาบู", emoji: "🍲" },
    { name: "สลัดผัก", emoji: "🥗" },
    { name: "แกงกะหรี่", emoji: "🍛" },
    { name: "พิซซ่า", emoji: "🍕" },
    { name: "ไก่ทอด", emoji: "🍗" }
];

const spinBtn = document.getElementById('spin-btn');
const resultText = document.getElementById('result-text');

let isSpinning = false;

spinBtn.addEventListener('click', () => {
    if (isSpinning) return;
    
    isSpinning = true;
    spinBtn.disabled = true;
    resultText.style.color = "#999";
    
    let counter = 0;
    
    const interval = setInterval(() => {
        const tempRandomIndex = Math.floor(Math.random() * dishes.length);
        const tempDish = dishes[tempRandomIndex];
        resultText.innerText = `กำลังสุ่ม... ${tempDish.emoji} ${tempDish.name}`;
        counter++;
        
        if (counter > 15) {
            clearInterval(interval);
            
            const finalIndex = Math.floor(Math.random() * dishes.length);
            const finalDish = dishes[finalIndex];
            
            resultText.style.color = "#e07a5f";
            resultText.innerHTML = ` <br><strong>${finalDish.emoji} ${finalDish.name}</strong>`;
            
            isSpinning = false;
            spinBtn.disabled = false;
        }
    }, 100);
});