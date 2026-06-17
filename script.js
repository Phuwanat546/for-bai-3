// ======================
// START GAME
// ======================

const startBtn =
document.getElementById("startBtn");

const startScreen =
document.getElementById("startScreen");

const bgMusic =
document.getElementById("bgMusic");

startBtn.addEventListener("click",()=>{

    startScreen.style.display="none";

    bgMusic.play();

});

// ======================
// BACKGROUND STARS
// ======================

const starsBg =
document.getElementById("starsBg");

for(let i=0;i<120;i++){

    const star =
    document.createElement("div");

    star.className="star-bg";

    const size =
    Math.random()*3+1;

    star.style.width=size+"px";
    star.style.height=size+"px";

    star.style.left=
    Math.random()*window.innerWidth+"px";

    star.style.top=
    Math.random()*window.innerHeight+"px";

    star.style.animationDelay=
    Math.random()*3+"s";

    starsBg.appendChild(star);

}

// ======================
// GAME DATA
// ======================

const rewards=[

{type:"image",src:"images/1.jpg"},
{type:"video",src:"videos/1.mp4"},

{type:"image",src:"images/2.jpg"},
{type:"video",src:"videos/2.mp4"},

{type:"image",src:"images/3.jpg"},
{type:"video",src:"videos/3.mp4"},

{type:"image",src:"images/4.jpg"},
{type:"video",src:"videos/4.mp4"},

{type:"image",src:"images/5.jpg"},
{type:"video",src:"videos/5.mp4"}

];

let collected=0;

const unlocked=[];

// ======================
// CREATE REAL STARS
// ======================

const starContainer=
document.getElementById("starContainer");

for(let i=0;i<10;i++){

    createRealStar();

}

// ======================
// CREATE FAKE STARS
// ======================

for(let i=0;i<15;i++){

    createFakeStar();

}

function randomPos(){

    return {

        x:
        Math.random()*
        (window.innerWidth-60),

        y:
        Math.random()*
        (window.innerHeight-120)+80

    };

}

// ======================
// REAL STAR
// ======================

function createRealStar(){

    const star=
    document.createElement("div");

    star.className="star";
    star.className="star real-star";
    star.className="star fake-star";

    star.innerHTML="⭐";

    const pos=
    randomPos();

    star.style.left=
    pos.x+"px";

    star.style.top=
    pos.y+"px";

    star.addEventListener("pointerdown",()=>{
    collectStar(star);
});

    starContainer.appendChild(star);

}

// ======================
// FAKE STAR
// ======================

function createFakeStar(){

    const star=
    document.createElement("div");

    star.className="star";

    star.innerHTML="✨";

    const pos=
    randomPos();

    star.style.left=
    pos.x+"px";

    star.style.top=
    pos.y+"px";

    star.addEventListener("pointerdown",()=>{
    collectStar(star);


        const x=
        Math.random()*
        (window.innerWidth-60);

        const y=
        Math.random()*
        (window.innerHeight-100);

        star.style.left=
        x+"px";

        star.style.top=
        y+"px";

    });

    starContainer.appendChild(star);

}

// ======================
// COLLECT STAR
// ======================

function collectStar(star){

    star.remove();

    collected++;
    const moon =
document.querySelector(
".moon-large"
);

const glow =
80 + (collected*20);

moon.style.boxShadow=
`
0 0 ${glow}px white,
0 0 ${glow*2}px rgba(255,255,255,.6)
`;

    document.getElementById(
    "starCount"
    ).textContent=
    collected;

    showReward(
    rewards[collected-1]
    );

    if(collected===10){

        setTimeout(showEnding,2000);

    }

}

// ======================
// REWARD POPUP
// ======================

const popup=
document.getElementById(
"rewardPopup"
);

const rewardImage=
document.getElementById(
"rewardImage"
);

const rewardVideo=
document.getElementById(
"rewardVideo"
);

function showReward(reward){

    popup.style.display=
    "flex";

    rewardImage.style.display=
    "none";

    rewardVideo.style.display=
    "none";

    if(reward.type==="image"){

        rewardImage.src=
        reward.src;

        rewardImage.style.display=
        "block";

    }

    if(reward.type==="video"){

        rewardVideo.src=
        reward.src;

        rewardVideo.style.display=
        "block";

        rewardVideo.play();

    }

    unlocked.push(reward);

    setTimeout(()=>{

        popup.style.display=
        "none";

        rewardVideo.pause();

    },4000);

}

// ======================
// ALBUM
// ======================

const albumBtn=
document.getElementById(
"albumBtn"
);

const albumScreen=
document.getElementById(
"albumScreen"
);

const albumGrid=
document.getElementById(
"albumGrid"
);

const closeAlbum=
document.getElementById(
"closeAlbum"
);

albumBtn.addEventListener(
"click",()=>{

    albumGrid.innerHTML="";

    unlocked.forEach(item=>{

        if(item.type==="image"){

            const img=
            document.createElement("img");

            img.src=item.src;

            albumGrid.appendChild(img);

        }

        if(item.type==="video"){

            const video=
            document.createElement("video");

            video.src=item.src;

            video.controls=true;

            albumGrid.appendChild(video);

        }

    });

    albumScreen.style.display=
    "flex";

});

closeAlbum.addEventListener(
"click",()=>{

    albumScreen.style.display=
    "none";

});

// ======================
// ENDING
// ======================

function showEnding(){

    const ending=
    document.getElementById(
    "endingScreen"
    );

    const wall=
    document.getElementById(
    "memoryWall"
    );

    wall.innerHTML="";

    unlocked.forEach(item=>{

        if(item.type==="image"){

            const img=
            document.createElement("img");

            img.src=item.src;

            wall.appendChild(img);

        }

        if(item.type==="video"){

            const video=
            document.createElement("video");

            video.src=item.src;

            video.muted=true;
            video.autoplay=true;
            video.loop=true;

            wall.appendChild(video);

        }

    });

    ending.style.display=
    "flex";

}


// ======================
// FOG
// ======================

for(let i=0;i<3;i++){


    const fog =
    document.createElement("div");

    fog.className="fog";

    fog.style.top=
    (100+i*120)+"px";

    fog.style.animationDelay=
    (i*10)+"s";

    document.body.appendChild(fog);

}


// ======================
// SHOOTING STAR
// ======================

function shootingStar(){

    const star =
    document.createElement("div");

    star.className=
    "shooting-star";

    star.style.left=
    Math.random()*
    window.innerWidth+"px";

    star.style.top=
    Math.random()*200+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1000);

}

setInterval(shootingStar,8000);
