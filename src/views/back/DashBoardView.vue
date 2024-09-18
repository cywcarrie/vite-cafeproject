<template>
  <Navbar />
  <div class="container-fluid mt-3 position-relative">
    <RouterView />
  </div>
</template>

<script>
import Navbar from '@/components/AdminNavbar.vue'
import Swal from 'sweetalert2'

const { VITE_APP_API } = import.meta.env

export default {
  components: {
    Navbar,
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    const api = `${VITE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((response) => {
      if (!response.data.success) {
        this.$router.push('/login')
      }
    }).catch ((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `${error.response.data.message}`,
        timer: 1500,
        toast: true,
        color: "#14213d",
        background: "#fef8e2",
        showConfirmButton: false,
        timerProgressBar: true
      })
    })
  }
}
</script>
