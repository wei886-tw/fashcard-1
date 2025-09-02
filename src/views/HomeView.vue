<template>
  <div class="container-fluid">
    <div class="container mx-auto w-100 py-32">
      <p class="text-center fs-32 fw-bold">Study</p>

      <!-- 第一行 -->
      <div
        class="container border border-5 border-secondary rounded bg-secondary text-center py-16 mb-32"
      >
        <p class="fw-bold mb-0">Welcome to</p>
        <p class="mb-32">Enhance your learning experience!</p>
        <p class="fw-bold mb-0">Start your flashcard session</p>
        <p class="mb-16">Connect with a learning guide</p>
        <router-link to="/" class="text-decoration-none text-white"
          ><button class="btn btn-dark w-50">Start Now</button></router-link
        >
      </div>
      <!-- 第一行 end -->

      <!-- Today's Goals -->
      <p class="fw-bold fs-32">Today's Goals</p>
      <div class="container ">
        <router-link to="/reviewView"
          ><button class="btn btn-dark me-24" style="width: 45%">Review</button></router-link
        >
        <router-link to="/practiceView"
          ><button class="btn btn-dark" style="width: 45%">Practice</button></router-link
        >
      </div>
      <!-- Today's Goals end-->

      <!-- Learning Activities -->
      <div class="container">
        <p class="fw-bold fs-32">Learning Activities</p>
      </div>
      <!-- Learning Activities end-->
    </div>
  </div>

  <FooterView />
</template>


<script>
import FooterView from '@/components/FooterView.vue'

export default {
  components: { FooterView },
}
</script>