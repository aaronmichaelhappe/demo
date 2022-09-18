<template>
  <div>
    <div id="pre-header-hook"></div>
    <header class="bg-gray-700 text-white">
      <nav class="container mx-auto p-2">
        <router-link to="/">Home</router-link> |
        <router-link to="/profile">Create Profile</router-link> |
        <router-link to="/books">Books</router-link> |
        <router-link to="/flyers">Flyers</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>
