<template>
  <div class="container-fluid">
    <!-- container 1 starts -->
    <div class="container w-100  py-32">
      <img src="../../public/login-pic.jpg" alt="login-pic" style="height: 200px; width: 400px;" class="d-block d-lg-none mx-auto mb-32 ">
      <img src="../../public/login-pic.jpg" alt="login-pic" style="height: 500px; width: 1000px;" class="d-none d-lg-block mx-auto mb-32 ">
      <h1 class="fs-24 fs-md-32 fs-lg-64 mb-24 text-center fw-bold">FlashCard Master</h1>
      <p class="mb-16 text-center">Learn efficiently with flashcards!</p>

      <form>
        <div class="w-75 mx-auto mb-16">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div class="w-75 mx-auto mb-16">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>

        <div class="mb-16 form-check d-block mx-auto w-75" >
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label " for="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" class="btn btn-dark d-block mx-auto w-75">Submit</button>
      </form>
    </div>
    <!-- container 1 ends -->
  </div>
</template>