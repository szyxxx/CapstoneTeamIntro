document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        { name: "Axel", description: '"apa aja asal sopan, pasti bisa"', imgSrc: "src/asset/axel.png", imgSrcAfter: "src/asset/axel_after.png", linkedin: "https://linkedin.com/in/axelldavid", github: "https://github.com/szyxxx", bg: "#4FACB3", role: "Cloud Computing", univ: "Telkom University" },
        { name: "Farhan", description: '"bisaa amann azaa"', imgSrc: "src/asset/farhan.png", imgSrcAfter: "src/asset/farhan_after.png", linkedin: "https://www.linkedin.com/in/farhanrizkifauzi/", github: "", bg: "#4FACB3", role: "Cloud Computing", univ: "Telkom University" },
        { name: "Tsani", description: '"aku pengendali eyay"', imgSrc: "src/asset/tsani.png", imgSrcAfter: "src/asset/tsani_after.png", linkedin: "https://www.linkedin.com/in/m-tsani-faishal-azhar-30846a258/", github: "", bg: "#D3B16C", role: "Machine Learning", univ: "Telkom University" },
        { name: "Andhin", description: '"respect wok"', imgSrc: "src/asset/andhin.png", imgSrcAfter: "src/asset/andhin_after.png", linkedin: "https://www.linkedin.com/in/andhin-vaniza-zahranie/", github: "", bg: "#D3B16C", role: "Machine Learning", univ: "Universitas Brawijaya" },
        { name: "Risa", description: '"jurusan MTK bjir"', imgSrc: "src/asset/febri.png", imgSrcAfter: "src/asset/febri_after.png", linkedin: "https://www.linkedin.com/in/febrisa-eka-n-patricia-64876b329/", github: "", bg: "#D3B16C", role: "Machine Learning", univ: "Universitas Brawijaya" },
        { name: "Valerie", description: "", imgSrc: "src/asset/valerie.png", imgSrcAfter: "src/asset/valerie_after.png", linkedin: "https://linkedin.com/in/valerie-audry-057109216/", github: "https://github.com/ValerieAudry198", bg: "#62BE86", role: "Mobile Development", univ: "Universitas Pancasila" },
        // { name: "??", description: "", imgSrc: "src/asset/emily.png", imgSrcAfter: "src/asset/emily_after.png", linkedin: "https://linkedin.com/in/unknown", github: "https://github.com/unknown", bg: "#62BE86", role: "Mobile Development", univ: "" },
    ];

    const container = document.querySelector('.team-member');
    if (!container) {
        console.error('Container element not found');
        return;
    }


    cardData.forEach(card => {
        const darkenedColor = darkenColor(card.bg, 0.3);
        const cardElement = document.createElement('div');
        cardElement.className = 'flex h-[28.875rem] items-start';
        cardElement.style.flex = '1 0 0';
        cardElement.style.width = '100%';

        cardElement.innerHTML = `
            <div class="team-sec flex flex-col py-0 px-0 items-center self-stretch rounded-3xl" style="flex: 1 0 0; background-color: ${card.bg}; border: 2px solid transparent;">
                <div class="team-content flex h-[13.56rem] pt-5 flex-col justify-evenly items-center self-stretch text-white text-center" style="font-family:'Poppins', system-ui;">
                    <span style="font-weight: 600; font-size: 1.8rem">${card.name}</span>
                    <p style="font-weight: 300; font-size: 1.1rem; width:85%; font-style: italic;">${card.description}</p>
                    <div class="flex justify-center items-center gap-2 self-stretch icons">
                        <a href="${card.linkedin}" target="_blank"><img style="width: 30px;" src="src/asset/linkedin.png" alt="LinkedIn"></a>
                        <a href="${card.github}" target="_blank"><img style="width: 30px;" src="src/asset/github.png" alt="GitHub"></a>
                    </div>
                </div>
                <div class="flex flex-col justify-end items-center gap-2" style="flex: 1 0 0; height: 50%;">
                    <img src="${card.imgSrc}" alt="" class="card-img">
                </div>
                <div class="half-circle" style="background-color: ${darkenedColor};">
                    <span class="half-circle-text" style="font-weight: 700; font-size: 14px;">${card.role}</span>
                    <span class="half-circle-text" style="font-size: 10px; font-style: italic;">${card.univ}</span>
                </div>
            </div>
        `;

        const cardInner = cardElement.querySelector('.team-sec');
        const cardImg = cardElement.querySelector('.card-img');
        const halfCircle = cardElement.querySelector('.half-circle');

        cardInner.addEventListener('mouseenter', () => {
            cardImg.src = card.imgSrcAfter;
            cardInner.style.borderColor = 'white';
            halfCircle.style.transform = 'translateY(0)';
        });

        cardInner.addEventListener('mouseleave', () => {
            cardImg.src = card.imgSrc;
            cardInner.style.borderColor = 'transparent';
            halfCircle.style.transform = 'translateY(150%)';
        });

        container.appendChild(cardElement);
    });
});

function darkenColor(hex, percent) {
    // Convert hex to RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Darken each color channel
    r = Math.floor(r * (1 - percent));
    g = Math.floor(g * (1 - percent));
    b = Math.floor(b * (1 - percent));

    // Convert back to hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
