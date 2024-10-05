document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        { name: "Axel", description: "apa aja asal sopan pasti bisa", imgSrc: "src/asset/axel.png", imgSrcAfter: "src/asset/axel_after.png", linkedin: "https://linkedin.com/in/axelldavid", github: "https://github.com/szyxxx", bg: "#4FACB3" },
        { name: "Farhan", description: "bisaa amann azaa", imgSrc: "src/asset/farhan.png", imgSrcAfter: "src/asset/farhan_after.png", linkedin: "https://www.linkedin.com/in/farhanrizkifauzi/", github: "", bg: "#4FACB3" },
        { name: "Tsani", description: "pengendali eyay", imgSrc: "src/asset/john.png", imgSrcAfter: "src/asset/john_after.png", linkedin: "https://linkedin.com/in/tsani", github: "https://github.com/tsani", bg: "#D3B16C" },
        { name: "Andhin", description: "jurusan MTK bjir", imgSrc: "src/asset/jane.png", imgSrcAfter: "src/asset/jane_after.png", linkedin: "https://linkedin.com/in/andhin", github: "https://github.com/andhin", bg: "#D3B16C" },
        { name: "Risa", description: "jurusan MTK bjir(2)", imgSrc: "src/asset/doe.png", imgSrcAfter: "src/asset/doe_after.png", linkedin: "https://linkedin.com/in/risa", github: "https://github.com/risa", bg: "#D3B16C" },
        { name: "??", description: "", imgSrc: "src/asset/smith.png", imgSrcAfter: "src/asset/smith_after.png", linkedin: "https://linkedin.com/in/unknown", github: "https://github.com/unknown", bg: "#62BE86" },
        { name: "??", description: "", imgSrc: "src/asset/emily.png", imgSrcAfter: "src/asset/emily_after.png", linkedin: "https://linkedin.com/in/unknown", github: "https://github.com/unknown", bg: "#62BE86" },
    ];

    const container = document.querySelector('.team-member');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    cardData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'flex h-[28.875rem] items-start';
        cardElement.style.flex = '1 0 0';

        cardElement.innerHTML = `
            <div class="flex flex-col py-0 px-7 self-stretch rounded-3xl" style="flex: 1 0 0; background-color: ${card.bg}; border: 2px solid transparent;">
                <div class="flex h-[13.56rem] pt-5 flex-col justify-between items-center self-stretch text-white text-center" style="font-family:'Poppins', system-ui;">
                    <span style="font-weight: 600; font-size: 1.4rem">${card.name}</span>
                    <p style="font-weight: 300; font-size: 1rem">${card.description}</p>
                    <div class="flex justify-center items-center gap-2 self-stretch icons">
                        <a href="${card.linkedin}" target="_blank"><img src="src/asset/linkedin.png" alt="LinkedIn"></a>
                        <a href="${card.github}" target="_blank"><img src="src/asset/github.png" alt="GitHub"></a>
                    </div>
                </div>
                <div class="flex flex-col justify-end items-center gap-2 self-stretch" style="flex: 1 0 0;">
                    <img src="${card.imgSrc}" alt="" class="card-img" style="max-width: 120%;">
                </div>
            </div>
        `;

        const cardInner = cardElement.querySelector('.flex.flex-col');
        const cardImg = cardElement.querySelector('.card-img');

        cardInner.addEventListener('mouseenter', () => {
            cardImg.src = card.imgSrcAfter;
            cardInner.style.borderColor = 'white';
        });

        cardInner.addEventListener('mouseleave', () => {
            cardImg.src = card.imgSrc;
            cardInner.style.borderColor = 'transparent';
        });

        container.appendChild(cardElement);
    });
});
