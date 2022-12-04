const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const gladiator = new Gladiator("Hogan", 100, 10, 10);


const animate = time => {
    gladiator.getName();

    gladiator.draw(ctx);
}

animate();