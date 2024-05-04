<script></script>

<template>
  <div style="margin-top: 70px"></div>
  <div class="header">
    <div class="background-img"></div>
    <div class="header-title text-center">
      <strong>
        <span style="color: #c7aa5e">MALIS</span>
        <span class="text-black"> PHNOM PENH</span>
      </strong>
    </div>
    <div class="header-descriptn text-center mt-1">
      <p style="color: #4D4D4D;">EXPERIENCE THE UNIQUE BLEND AND HARMONY OF SPICES AT MALIS</p>
    </div>
  </div>

  <div class="row px-10 py-28">
    <div class="col col-6 justify-content-center align-items-center text-align-center">
      <strong>
        <span style="color: #c7aa5e; font-size: 35px">THE</span>
        <span style="color: #4d4d4d; font-size: 35px"> VENUE</span><br />
      </strong>
      <p class="mt-2">
        AS WELL AS EXQUISITE CAMBODIAN CUISINE, MALIS RESTAURANT OFFERS A SOPHISTICATED AND ELEGANT
        SETTING.
      </p>
      <p class="mt-10" style="color: gray">
        Located in the heart of Phnom Penh, near the Independence Monument, guests can choose to
        dine in the outdoor courtyard or in air-conditioned comfort. The tables surround a beautiful
        tropical garden with flowering frangipanis and a trickling water feature beside a giant
        statue of Jayavarman VII, abiding by the principles of Feng Shui. Malis Restaurant is open
        for breakfast, lunch and dinner, and offers private dining rooms for business lunches or
        special events.
      </p>
    </div>
    <div class="col col-6">
      <img src="../assets/images/pp-page-1.png" alt="" />
    </div>
  </div>

  <div class="col-12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d500349.67983154237!2d104.929108!3d11.553157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109512fdb27a025%3A0xba9dd2cbcb3609cd!2sMalis%20Norodom!5e0!3m2!1sen!2sus!4v1714498347470!5m2!1sen!2sus"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="w-100"
    ></iframe>
  </div>
</template>

<style>
body {
  overflow-x: hidden;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 200px;
}
.header-title strong {
  font-size: 35px;
}
.background-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f4f4f4;
  background: url('../assets/images/pp-page-1.png') no-repeat center center/100% auto;
  opacity: 0.3;
  width: 100vw;
  height: 200px;
  z-index: -1;
}

.header strong,
.header p {
  color: white;
  text-align: center; 
  position: relative; 
  z-index: 1; 
}
</style>
