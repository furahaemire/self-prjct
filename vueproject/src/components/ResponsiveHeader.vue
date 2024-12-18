<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <!-- Logo/Brand -->
        <RouterLink class="navbar-brand"  to="/">The Skills Media</RouterLink>

        <!-- Hamburger button for small screens -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar Links -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <RouterLink  class="nav-link active" to="./">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink  class="nav-link active" to="/AboutPage">About</RouterLink>
            </li>
            <li class="nav-item">
							<RouterLink  class="nav-link active" to="./Register">Registration</RouterLink>
            </li>
            <li class="nav-item">
							<RouterLink  class="nav-link active" to="./Login">Login</RouterLink>
            </li>

						<li class="nav-item">
							<RouterLink  class="nav-link active" to="./AdminPage">Admin</RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "ResponsiveHeader",
};
</script>

<style scoped>
/* Optional: Custom styles for the header */
.navbar {
  margin-bottom: 20px;
}
.nav-link {
	text-decoration: none;
}
</style>
