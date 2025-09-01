<template>
  <div class="container-fluid  d-flex flex-column justify-content-center min-vh-100"> 
    <div class="container ">
      <h1
        class="fs-24 fs-md-32 fs-lg-64 border-dark border-3 border-top border-bottom py-16 mb-24 text-center fw-bold"
      >
        FlashCard Master
      </h1>
      <p class="fw-bold mb-40 text-center">Master language efficiently</p>
      <div class="container  mx-auto" style="width: 80%;">
        <img
          src="../../public/flashcard_cover.jpg"
          alt="Flashcard Master.png"
          class="w-100 mb-32 border rounded rounded-5"
        />
        <router-link to="/loginView" class="btn btn-dark w-100 text-decoration-none">Get Started</router-link>
      </div>
    </div>
  </div>
</template>