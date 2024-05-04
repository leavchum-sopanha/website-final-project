<template>
  <div style="margin-top: 70px"></div>
  <div class="img">
    <!-- display image -->
  </div>
  <div class="col-12 align-items-center text-center py-14 bg-gray-100">
    <p class="fw-medium text-2xl">Welcome to</p>
    <p class="fw-bold text-4xl my-3">MALIS RESTAURANT</p>
    <p style="color: #4d4d4d">
      Malis is a high-end Cambodian restaurant which boasts a : “Living Cambodian Cuisine”<br />

      By researching, practicing & promoting Cambodian cuisine, Malis aims to safeguard the nation’s
      food heritage for years to come.
    </p>
    <button class="mt-3 btn-booktable" style="width: 200px; height: 50px">BOOK YOUR TABLE</button>
  </div>

  <div class="row align-items-center" style="width: 100vw">
    <div class="col-6 p-0 m-0">
      <img src="../assets/images/pp-page-1.png" style="object-fit: contain" alt="" />
    </div>
    <div class="col-6 text-center align-items-center">
      <p class="fw-bold text-3xl mb-3">Malis Phnom Penh</p>
      <p class="mx-4" style="color: #4d4d4d">
        In the heart of Phnom Penh, Malis serves Living Cambodian Cuisine in a beautiful fountain
        garden surrounded by indoor seating. Open for breakfast, lunch and dinner, Malis also offers
        private dining rooms for business lunches or special events.
      </p>
      <div class="row my-4 align-items-center justify-content-center">
        <button style="width: 120px; height: 50px" class="btn-explore bg-gray-100 mr-3">
          EXPLORE
        </button>
        <button style="width: 120px; height: 50px" class="btn-book">BOOK</button>
      </div>
      <p class="text-black" style="font-size: 12px">
        No. 136 Norodom Blvd, Phnom Penh, Cambodia <br />
        +855 (0)15 814 888 <br />
        reservation.malispp@thaliashospitality.com <br />
      </p>
    </div>
  </div>

  <div class="row col-12 align-items-center" style="width: 100vw">
    <div class="col-6 text-center align-items-center">
      <p class="fw-bold text-3xl mb-3">Malis Siem Reap</p>
      <p class="mx-4" style="color: #4d4d4d">
        Overlooking the Siem Reap River, diners are treated to a delightful ambiance with a stunning
        garden, water pond and area for apsara dance performances. The beautiful interiors are
        inspired by the temples of Angkor boasting high ceilings, grey stone and a sense of space
      </p>
      <div class="row my-4 align-items-center justify-content-center">
        <button style="width: 120px; height: 50px" class="btn-explore bg-gray-100 mr-3">
          EXPLORE
        </button>
        <button style="width: 120px; height: 50px; color: white" class="btn-book">BOOK</button>
      </div>
      <p class="text-black" style="font-size: 12px">
        Pokambor Avenue, Siem Reap Riverside, Siem Reap, Cambodia <br>
        +855(0)15 824 888 <br>
        reservation.malissr@thaliashospitality.com <br>
      </p>
    </div>
    <div class="col-6 p-0 m-0">
      <img src="../assets/images/home-page-2.jpg" style="object-fit: contain" alt="" />
    </div>
  </div>

  <div
    class="row py-5 pl-8 justify-content-center align-items-center"
    style="background-color: #c7aa5e"
  >
    <div class="col-6 m-0 pl-10">
      <p class="font font-medium">MASTER CHEF</p>
      <p class="font-bold py-3" style="font-size: 30px">Luu Meng</p>
      <p class="text-white">
        Passion, history and creativity combine in the <br />
        Malis kitchen to bring you authentic Cambodian cuisine.
      </p>
    </div>
    <div class="col-6 text-end pr-20">
      <button class="justify-content-end btn-checkmenu" style="width: 175px; height: 50px">
        CHECK OUR MENU
      </button>
    </div>
  </div>
</template>

<style>
body {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.img {
  background: url('../assets/images/pp-page-1.png') no-repeat center center/100% auto;
  width: 100vw;
  height: 500px;
}

.btn-booktable {
  background-color: #202945;
  color: white;
}

.btn-booktable:hover {
  background-color: #c7aa5e;
  color: white;
}

.btn-explore:hover {
  background-color: #c7aa5e;
  color: white;
}

.btn-book {
  background-color: #202945;
  color: white;
}

.btn-book:hover {
  background-color: #c7aa5e;
  color: white;
}

.btn-checkmenu {
  background-color: white;
  color: black;
}

.btn-checkmenu:hover {
  background-color: gray;
  color: white;
}
</style>
