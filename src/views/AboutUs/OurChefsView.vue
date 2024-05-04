<script></script>

<template>
  <div style="margin-top: 70px"></div>
  <div class="header">
    <div class="background-img"></div>
    <div class="header-title text-center">
      <strong>
        <span style="color: #c7aa5e">OUR</span>
        <span class="text-black"> CHEFS</span>
      </strong>
    </div>
    <div class="header-descriptn text-center mt-1">
      <p style="color: #4d4d4d">
        Passion, history and creativity combine in the Malis kitchen to bring you authentic
        Cambodian cuisine.
      </p>
    </div>
  </div>

  <div class="col col-12">
    <div class="row justify-content-center mt-28">
      <div class="col-3">
        <img src="../../assets/images/LuuMeng.png" alt="" />
      </div>
      <div class="col-4 text-center align-content-center ml-16">
        <div class=""><p class="font font-medium">MASTER CHEF</p></div>
        <p class="font-bold py-3" style="font-size: 30px">Luu Meng</p>
        <p class="text-gray-500">
          Luu Meng is Cambodia’s only Master Chef. He is constantly experimenting with flavours and
          textures and digging out his country’s culinary secrets to be shared in the Malis kitchen.
        </p>
      </div>
    </div>
    <div class="row justify-content-center mt-28">
      <div class="col-4 text-center align-content-center mr-16">
        <div class=""><p class="font font-medium">EXECUTIVE CHEF, MALIS PHNOM PENH</p></div>
        <p class="font-bold py-3" style="font-size: 30px">Luu Hong</p>
        <p class="text-gray-500">
          Luu Hong is the younger brother of Master Chef Luu Meng. Together they have adapted
          recipes of old to the palates of today, and put Cambodian cuisine back on the food map.
        </p>
      </div>
      <div class="col-3">
        <img src="../../assets/images/LuuHong.png" alt="" />
      </div>
    </div>
    <div class="row justify-content-center my-28">
      <div class="col-3">
        <img src="../../assets/images/CheaSreypov.png" alt="" />
      </div>
      <div class="col-4 text-center align-content-center ml-16">
        <div class=""><p class="font font-medium">SOUS CHEF, MALIS PHNOM PENH</p></div>
        <p class="font-bold py-3" style="font-size: 30px">Chea Srey Pov</p>
        <p class="text-gray-500">
          Sous Chef Chea Srey Pov has a lot of passion in Cambodian cuisine. She strives to bring
          her exceptional culinary skills and a love of Cambodian cuisine to the Malis team in Phnom
          Penh.
        </p>
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
  background: url('../../assets/images/home-page-1.jpg') no-repeat center center/100% auto;
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
