<template>
  <div style="margin-top: 70px"></div>
  <div class="header">
    <div class="background-img"></div>
    <div class="header-title text-center">
      <strong>
        <span style="color: #c7aa5e">CONTACT</span>
        <span class="text-black"> US</span>
      </strong>
    </div>
    <div class="header-descriptn text-center mt-1">
      <p class="text-black">We'd love to hear from you!</p>
    </div>
  </div>

  <div class="row my-20 ml-2">
    <div class="col-6">
      <div>
        <h4 class="font-medium text-2xl">Malis Phnom Penh</h4>
        <p class="pt-3">
          No. 136 Norodom Blvd, Phnom Penh, Cambodia <br />
          +855 (0)15 814 888 <br />
          reservation.malispp@thalias.com.kh
        </p>
      </div>
      <div class="mt-10">
        <h4 class="font-medium text-2xl">Malis Siem Reap</h4>
        <p class="pt-3">
          Pokambor Avenue, Siem Reap Riverside, Siem Reap, Cambodia <br />
          +855(0)15 824 888 <br />
          reservation.malissr@thalias.com.kh
        </p>
      </div>
    </div>
    <div class="col-6">
      <div class="row mr-2 mb-4">
        <label for="firstname" class="p-0 pb-1 text-xs font-bold" style="color: #777771"
          >FIRST NAME<span class="text-red text-red-400">*</span></label
        >
        <input
          type="text"
          class="form-control"
          style="background-color: #e6e6e6; height: 40px; border-radius: 0"
        />
      </div>
      <div class="row mr-2 mb-4">
        <label for="firstname" class="p-0 pb-1 text-xs font-bold" style="color: #777771"
          >EMAIL ADDRESS<span class="text-red text-red-400">*</span></label
        >
        <input
          type="text"
          class="form-control"
          style="background-color: #e6e6e6; height: 40px; border-radius: 0"
        />
      </div>
      <div class="row mr-2 mb-4">
        <label for="firstname" class="p-0 pb-1 text-xs font-bold" style="color: #777771"
          >PHONE NUMBER</label
        >
        <input
          type="text"
          class="form-control"
          style="background-color: #e6e6e6; height: 40px; border-radius: 0"
        />
      </div>
      <div class="row mr-2 mb-4">
        <label for="firstname" class="p-0 pb-1 text-xs font-bold" style="color: #777771"
          >MESSAGE</label
        >
        <textarea
          type="text"
          class="form-control"
          style="background-color: #e6e6e6; min-height: 140px; border-radius: 0"
        >
        </textarea>
        <button
          class="p-0 mt-10"
          style="background-color: #c7aa5e; color: white; width: 150px; height: 50px"
        >
          SEND MESSAGE
        </button>
      </div>
    </div>
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
