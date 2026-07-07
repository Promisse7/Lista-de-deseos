* {
  box-sizing: border-box;
}

:root {
  --gold: #d4af37;
  --gold-light: #fff1a8;
  --gold-dark: #8a6512;
  --white: #ffffff;
  --soft-white: rgba(255, 255, 255, 0.82);
  --glass: rgba(8, 8, 12, 0.56);
  --glass-light: rgba(255, 255, 255, 0.10);
  --border-gold: rgba(212, 175, 55, 0.55);
  --shadow-gold: rgba(212, 175, 55, 0.35);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  color: var(--white);
  background: #000;
  overflow-x: hidden;
}

.bg {
  position: fixed;
  inset: 0;
  background-image: url("fondo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -4;
}

.bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(255, 220, 120, 0.10), transparent 32%),
    linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0.20));
  z-index: -3;
}

.gold-glow {
  position: fixed;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,175,55,.30), transparent 68%);
  filter: blur(14px);
  pointer-events: none;
  z-index: -2;
  animation: floatGlow 7s ease-in-out infinite;
}

.glow-one {
  top: 8%;
  left: -80px;
}

.glow-two {
  bottom: 5%;
  right: -90px;
  animation-delay: 2s;
}

.screen {
  display: none;
  min-height: 100vh;
  padding: 26px 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.screen.active {
  display: flex;
  animation: screenFade 0.8s ease both;
}

.glass-card {
  width: 100%;
  max-width: 430px;
  padding: 34px 26px;
  border-radius: 30px;
  border: 1px solid var(--border-gold);
  background:
    linear-gradient(145deg, rgba(255,255,255,.13), rgba(255,255,255,.03)),
    var(--glass);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow:
    0 0 0 1px rgba(255,255,255,.06) inset,
    0 25px 70px rgba(0,0,0,.55),
    0 0 38px rgba(212,175,55,.18);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(255,255,255,.12) 35%,
    transparent 65%
  );
  transform: translateX(-120%);
  animation: shine 5s ease-in-out infinite;
  pointer-events: none;
}

.hero-card {
  padding-top: 42px;
  padding-bottom: 38px;
}

.tiny-heart {
  width: 44px;
  height: 44px;
  margin: 0 auto 12px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #ffdfdf;
  font-size: 26px;
  background: rgba(255,255,255,.10);
  border: 1px solid rgba(255,255,255,.20);
  box-shadow:
    0 0 18px rgba(255,180,180,.35),
    0 0 26px rgba(212,175,55,.20);
}
.gold-title {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: 66px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 0.95;

  background: linear-gradient(
    to bottom,
    #fff9d9 0%,
    #fff0a8 18%,
    #ffd45a 42%,
    #d4af37 62%,
    #9b7413 100%
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 1px 0 rgba(255,255,255,.45),
    0 4px 10px rgba(0,0,0,.50),
    0 0 18px rgba(255,220,120,.35),
    0 0 34px rgba(212,175,55,.28);
}

.gold-title.small {
  font-size: 46px;
}

.handwritten {
  margin: 12px 0 6px;
  font-family: "Dancing Script", cursive;
  font-size: 31px;
  color: #fff4c8;
  text-shadow:
    0 2px 8px rgba(0,0,0,.45),
    0 0 14px rgba(255,220,150,.35);
}

.soft-text {
  margin: 8px 0 0;
  color: var(--soft-white);
  font-size: 14px;
  line-height: 1.6;
}

.section-title {
  margin: 10px 0 4px;
  font-family: "Cormorant Garamond", serif;
  font-size: 34px;
  font-weight: 700;
  color: #fff1a8;
  text-shadow: 0 0 16px rgba(212,175,55,.28);
}

.birthday-title {
  margin: 8px 0 12px;
  font-family: "Cormorant Garamond", serif;
  font-size: 34px;
  line-height: 1.05;
  color: #fff1a8;
  text-shadow:
    0 4px 12px rgba(0,0,0,.45),
    0 0 18px rgba(212,175,55,.30);
}

.welcome-text {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255,255,255,.92);
}

.gold-button {
  width: 100%;
  margin-top: 24px;
  padding: 15px 20px;
  border: 0;
  border-radius: 18px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: .8px;
  text-transform: uppercase;
  color: #2b1b00;
  cursor: pointer;

  background:
    linear-gradient(180deg, rgba(255,255,255,.45), transparent 35%),
    linear-gradient(135deg, #fff0a8, #d4af37 50%, #9b7413);

  box-shadow:
    0 10px 22px rgba(0,0,0,.35),
    0 0 24px rgba(212,175,55,.32),
    inset 0 1px 0 rgba(255,255,255,.60);

  transition: transform .18s ease, box-shadow .18s ease, filter .18s ease;
}

.gold-button:hover {
  transform: translateY(-2px);
  filter: brightness(1.07);
  box-shadow:
    0 14px 28px rgba(0,0,0,.40),
    0 0 34px rgba(212,175,55,.42),
    inset 0 1px 0 rgba(255,255,255,.70);
}

.gold-button:active {
  transform: translateY(1px) scale(.99);
}

.lock,
.unlock,
.big-heart {
  font-size: 74px;
  line-height: 1;
  margin-bottom: 12px;
  filter: drop-shadow(0 0 14px rgba(212,175,55,.35));
}

.lock {
  animation: lockFloat 2.8s ease-in-out infinite;
}

.unlock {
  animation: unlockGlow 1.45s ease-in-out infinite;
}

.big-heart {
  color: #ffd4d4;
  text-shadow:
    0 0 16px rgba(255,160,160,.45),
    0 0 32px rgba(212,175,55,.18);
  animation: heartBeat 1.45s ease-in-out infinite;
}

.code-input {
  width: 100%;
  margin-top: 18px;
  padding: 16px 14px;
  border-radius: 18px;
  border: 1px solid rgba(212,175,55,.55);
  outline: none;
  text-align: center;
  font-size: 24px;
  letter-spacing: 10px;
  color: white;
  background:
    linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.03)),
    rgba(0,0,0,.38);
  box-shadow:
    inset 0 0 16px rgba(0,0,0,.35),
    0 0 16px rgba(212,175,55,.10);
}

.code-input:focus {
  border-color: #fff0a8;
  box-shadow:
    inset 0 0 16px rgba(0,0,0,.35),
    0 0 24px rgba(212,175,55,.28);
}

.error {
  min-height: 20px;
  margin: 12px 0 0;
  color: #ffd0d0;
  font-size: 13px;
}

.vault-screen {
  align-items: flex-start;
  padding-top: 28px;
  padding-bottom: 42px;
}

.vault-container {
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}

.vault-header {
  text-align: center;
  margin-bottom: 18px;
}

.progress-card {
  padding: 16px;
  margin: 0 0 18px;
  border-radius: 22px;
  border: 1px solid rgba(212,175,55,.45);
  background:
    linear-gradient(145deg, rgba(255,255,255,.12), rgba(255,255,255,.04)),
    rgba(0,0,0,.50);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 18px 45px rgba(0,0,0,.35),
    0 0 24px rgba(212,175,55,.14);
}

.progress-top {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  align-items: center;
  font-size: 14px;
  color: #fff1c8;
  font-weight: 600;
}

.progress-bar {
  height: 11px;
  margin-top: 12px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255,255,255,.14);
  box-shadow: inset 0 0 8px rgba(0,0,0,.35);
}

.progress-fill {
  width: 0%;
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, #9b7413, #d4af37, #fff1a8);
  box-shadow: 0 0 18px rgba(212,175,55,.45);
  transition: width .45s ease;
}
.gift-section {
  margin-bottom: 18px;
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid rgba(212,175,55,.45);
  background:
    linear-gradient(145deg, rgba(255,255,255,.10), rgba(255,255,255,.03)),
    rgba(0,0,0,.48);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 15px 40px rgba(0,0,0,.30),
    0 0 20px rgba(212,175,55,.12);
}

.gift-section-header {
  width: 100%;
  border: none;
  background: transparent;
  color: #fff1a8;
  padding: 18px 22px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  font-family: "Cormorant Garamond", serif;
}

.arrow {
  transition: transform .35s ease;
  font-size: 22px;
}

.gift-section.open .arrow {
  transform: rotate(180deg);
}

.gift-list {
  display: none;
  padding: 0 16px 16px;
}

.gift-section.open .gift-list {
  display: block;
  animation: fadeDown .45s ease;
}

.gift {
  display: grid;
  grid-template-columns: 34px 1fr 150px;
  gap: 12px;
  align-items: center;

  margin: 12px 0;
  padding: 14px;

  border-radius: 18px;

  background: rgba(255,255,255,.08);

  transition: .25s;
}

.gift:hover {
  background: rgba(255,255,255,.12);
  transform: translateY(-2px);
}

.gift input[type="checkbox"]{
  width:22px;
  height:22px;
  accent-color:#d4af37;
  cursor:pointer;
}

.gift-name{
  font-size:15px;
  color:white;
  line-height:1.5;
}

.gift.done .gift-name{
  text-decoration:line-through;
  opacity:.55;
}

.gift input[type="date"]{
  padding:10px;
  border-radius:12px;
  border:1px solid rgba(212,175,55,.35);
  background:rgba(255,255,255,.08);
  color:white;
}

.footer-note{
  text-align:center;
  margin-top:26px;
  opacity:.85;
  font-size:14px;
}

/* ANIMACIONES */

@keyframes screenFade{

  from{
    opacity:0;
    transform:translateY(25px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }

}

@keyframes shine{

  0%{
    transform:translateX(-150%);
  }

  35%{
    transform:translateX(180%);
  }

  100%{
    transform:translateX(180%);
  }

}

@keyframes heartBeat{

  0%,100%{
    transform:scale(1);
  }

  50%{
    transform:scale(1.12);
  }

}

@keyframes lockFloat{

  0%,100%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-6px);
  }

}

@keyframes unlockGlow{

  50%{
    transform:scale(1.12) rotate(-8deg);
  }

}

@keyframes floatGlow{

  0%,100%{
    transform:translateY(0px);
  }

  50%{
    transform:translateY(-20px);
  }

}

@keyframes fadeDown{

  from{
    opacity:0;
    transform:translateY(-10px);
  }

  to{
    opacity:1;
    transform:translateY(0);
  }

}

/* RESPONSIVE */

@media(max-width:700px){

  .gold-title{
    font-size:52px;
  }

  .gold-title.small{
    font-size:38px;
  }

  .handwritten{
    font-size:26px;
  }

  .birthday-title{
    font-size:30px;
  }

  .gift{

    grid-template-columns:32px 1fr;

  }

  .gift input[type="date"]{

    grid-column:2;

  }

}

@media(max-width:480px){

  .glass-card{

    padding:28px 22px;

  }

  .gold-title{

    font-size:46px;

  }

  .gold-title.small{

    font-size:34px;

  }

  .section-title{

    font-size:30px;

  }

  .gift-section-header{

    font-size:17px;

  }

}
