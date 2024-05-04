<template >
  <div style="margin-top: 70px"></div>
  <div class="header">
    <div class="background-img"></div>
    <div class="header-title text-center">
      <strong>
        <span style="color: #c7aa5e">LEGAL</span>
        <span class="text-black"> NOTICE</span>
      </strong>
    </div>
    <div class="header-descriptn text-center mt-1">
      <p style="color: #4d4d4d">Cookie Policy, Privacy Policy</p>
    </div>
  </div>

  <div class="mx-6 my-16">
    <div>
      <p class="text-3xl font-ariel fw-medium">Our Cookies Policy</p>
      <p class="pt-3" style="color: gray">
        Cookies are small text files that we place on your device when you visit our website.On your
        first visit to our website, you will see a pop-up notifying that we are using cookies.We use
        cookies to enable our systems to recognize your browser or device which facilitates
        navigation on our website.You have choice to reject cookies by clicking on the “Reject”
        button that appears on the pop-up notification when you first access our website. <br />
        <br />
        Rejecting cookies may prevent users from accessing some parts of our website or they may not
        function properly.
      </p>
    </div>
    <div class="mt-6">
      <p class="text-3xl font-ariel fw-medium">Our Privacy Policy</p>
      <p class="pt-3" style="color: gray">
        Our Company is committed to conducting its business in compliance with all applicable Laws
        and Toward that ends, we design this Privacy Policy to protecting the privacy and security
        of all personal information “Data” collected through your communication with us and
        describes how your data is collected, disclosed and utilized. <br />
        <br />
        “Our Company, Web owner, we, us, our, Thalias Hospitality Group” refer to
        <strong>THALIAS Co., LTD</strong>
        <br />
        “You, your, customers” refer to web user <br /><br />
        “Our Company, Web owner, we, us, our, Thalias Hospitality Group” refer to THALIAS Co., LTD
        “You, your, customers” refer to web user
      </p>
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
