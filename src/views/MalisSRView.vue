<script setup></script>

<template>
  <div style="margin-top: 70px"></div>
  <div class="header">
    <div class="background-img"></div>
    <div class="header-title text-center">
      <strong>
        <span style="color: #c7aa5e">MALIS</span>
        <span class="text-black"> SIEM REAP</span>
      </strong>
    </div>
    <div class="header-descriptn text-center mt-1">
      <p style="color: #4d4d4d">BRINGING CAMBODIAN CUISINE BACK TO LIFE.</p>
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
        Overlooking the Siem Reap River, diners are treated to a delightful ambiance with a stunning
        garden, water pond and area for apsara dance performances. The beautiful interiors are
        inspired by the temples of Angkor boasting high ceilings, grey stone and a sense of space.
        Cambodian art and handicrafts feature throughout, embracing the local culture. The new
        restaurant will feature a dining area, bar and lounge downstairs with private dining rooms.
      </p>
    </div>
    <div class="col col-6">
      <img src="../assets/images/home-page-1.jpg" alt="" />
    </div>
  </div>

  <div class="col-12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d496883.6298062217!2d103.85765!3d13.356285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311017706ab6515b%3A0xe7a4da4ac3c949bb!2sMalis%20Siem%20Reap!5e0!3m2!1sen!2sus!4v1714554322801!5m2!1sen!2sus"
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
  background: url('../assets/images/home-page-1.jpg') no-repeat center center/100% auto;
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
