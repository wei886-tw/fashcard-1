<template>
  <div class="container-fluid">
    <!-- container 1 starts -->
    <div class="container w-100 py-32">
      <img
        src="../../public/login-pic.jpg"
        alt="login-pic"
        style="height: 150px; width: 300px"
        class="d-block d-lg-none mx-auto mb-32"
      />
      <img
        src="../../public/login-pic.jpg"
        alt="login-pic"
        style="height: 450px; width: 900px"
        class="d-none d-lg-block mx-auto mb-32"
      />
      <h1 class="fs-24 fs-md-32 fs-lg-64 text-center fw-bold mb-32">FlashCard Master</h1>

      <form>
        <div class="w-75 mx-auto mb-16">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="w-75 mx-auto mb-16">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control mb-16" id="exampleInputPassword1" />
        </div>

        <router-link to="/homeView" type="submit" class="btn btn-dark d-block mx-auto w-75 mb-16">Log In</router-link>

        <div class="w-75 mx-auto ">
          <hr />
          <p class="text-center">Or log in via</p>
          <div class="d-flex justify-content-between">
            <div class="btn btn-dark me-8 mb-16" style="width: 45%">Facebook</div>
            <div class="btn btn-dark w-50 mb-16" style="width: 45%">Google</div>
          </div>
          <router-link to="/register" class="text-decoration-none text-dark fw-bold mx-auto w-75 text-center">New here? Sign up</router-link>
        </div>
      </form>
    </div>
    <!-- container  ends -->
  </div>
</template>