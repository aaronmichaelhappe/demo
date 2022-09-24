<template>
  <div class="align-items grid grid-cols-3 justify-items-center gap-8">
    <ion-icon
      name="book-outline"
      class="col-start-2 text-4xl text-amber-500"
    ></ion-icon>
    <div class="col-start-3 flex cursor-pointer items-center text-grey-300">
      <!-- // TODO current page style indication -->
      <router-link to="/" class="mr-2">About</router-link> |
      <router-link to="/login" class="ml-2">Log In Page</router-link>
    </div>
  </div>
</template>
