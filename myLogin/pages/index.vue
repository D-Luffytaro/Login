<template>

  <div class="flex items-center fitImage">
    <div>
      <img src="../assets/images/pika.gif" class="fitImage" alt="image">
    </div>

    <section class="max-w-xs m-auto">

      <!-- Headline -->
      <div>
        <h1 class="font-bold text-center text-lg">Hello welcome Back</h1>
        <div>
          <img class="float-right w-11" src="../assets/images/ecologie.png" alt="board">
        </div>
        <p class="ml-12 text-center text-xs mt-3">Sign in to Continue</p>
      </div>

      <!-- Form -->
      <form class="p-8 border-solid border-2 border-black mt-10 shadow-lg">
        <div>
          <label class="text-sm">Username</label><br>
          <input type="text" class="w-full p-2 bg-mid-grey text-sm border-none mt-1 outline-none borderBottom">
        </div>
        <div class="my-6">
          <label class="text-sm">Password</label><br>
          <input type="passworld" class="w-full p-2 bg-mid-grey text-sm border-none mt-1 outline-none borderBottom">
        </div>
        <div>
          <button
            class="mt-3 text-white bg-dark-green hover:bg-mid-green w-full p-2 text-center border-solid border-2 border-black text-sm shadowBox">Login</button>
        </div>

        <!-- Extra Login -->
        <div class="flex mt-8 box">
          <button
            class="flex justify-center items-center py-2 bg-pastel-pnk w-1/2 border-solid border-2 border-black hover:bg-[#FFBCBC] relative text-sm"><img
              src="../assets/images/g.png" class="w-3 mr-2" alt="Logo Gmail">Gmail</button>
          <button
            class="flex justify-center items-center bg-mid-yellow w-1/2 border-solid  border-y-2 border-r-2 border-black hover:bg-[#FFE274] text-sm relative">
            <img src="../assets/images/facebook.png" class="w-3 bg-white mr-2" alt="Logo Facebook"> Facebook</button>
        </div>

        <div class="text-xs text-center mt-7">
          <p>by Continuing, you accept our <span class="underline">Terms and Conditions, Privacy Policy</span></p>
        </div>
      </form>

    </section>

  </div>


</template>

<script></script>

<style>
.fitImage {
  height: 100vh;
}

.borderBottom:focus {
  border-bottom: dashed black 1.5px;
}

.shadowBox {
  position: relative;
}

.shadowBox::after {
  content: '';
  position: absolute;
  z-index: -1;
  right: -5px;
  bottom: -5px;
  width: 100%;
  height: 100%;
  background: white;
  border: 2px solid black;
}

.shadowBox:active {
  top: 4px;
  left: 4px;
}

.shadowBox:active::after {
  top: 0px;
  left: 0px;
}

.box {
  position: relative;
}

.box::after {
  content: '';
  position: absolute;
  z-index: -1;
  right: -3px;
  bottom: -3px;
  width: 100%;
  height: 100%;
  background: white;
  border: 2px solid black;
}

.box button:first-child {
  border-right: 1px solid black;
}

.box button:last-child {
  border-left: 1px solid black;
}

button:active {
  top: 3.1px;
  left: 3.1px;
}
</style>
