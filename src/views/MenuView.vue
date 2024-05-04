<template>
  <div style="margin-top: 70px"></div>
  <div class="header col-12">
    <div class="background-img col-12 w-100"></div>
    <div class="header-title text-center">
      <strong>
        <span style="color: #c7aa5e">OUR</span>
        <span class="text-black"> MENU</span>
      </strong>
    </div>
    <div class="header-descriptn text-center mt-1">
      <p style="color: #4d4d4d">A LA CARTE, LUNCH SET, DRINK LIST</p>
    </div>
  </div>

  <div class="">
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0001.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0002.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0003.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0004.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0005.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0006.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0007.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0008.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0009.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0010.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0011.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0012.jpg" alt="" />
    </div>
    <div class="col-12">
      <img src="../assets/images/menu/Malis_new_menu-2022-1_page-0013.jpg" alt="" />
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
  width: 100vw;
  height: 200px;
  overflow-x: hidden; 
}

.header-title strong {
  font-size: 35px;
}

.background-img {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #f4f4f4;
  background-image: url('../assets/images/home-page-1.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.3;
  width: 100%;
  height: 100%;
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
