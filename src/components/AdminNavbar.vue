<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><h1 class="logo text-white fs-2 mb-0 fw-bolder me-3">
          <i class="bi bi-house-heart pe-2"></i>Fun<span class="text-white">nie</span>
        </h1></a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <RouterLink to="/admin/products" class="nav-link">產品</RouterLink>
          <RouterLink to="/admin/orders" class="nav-link">訂單</RouterLink>
          <RouterLink to="/admin/coupons" class="nav-link">優惠券</RouterLink>
          <a href="#" class="nav-link" @click.prevent="logout">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ShowNotification from '@/mixins/swal'

const { VITE_APP_API } = import.meta.env

export default {
  methods: {
    logout() {
      const api = `${VITE_APP_API}logout`
      this.$http
        .post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            ShowNotification('success', 'Logout Successful')
            this.$router.push('/login')
          } else {
            ShowNotification('error', 'Logout Failed')
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    }
  }
}
</script>
