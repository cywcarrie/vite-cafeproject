<template>
  <div class="container my-5 py-5">
    <form class="row justify-content-center py-5 px-3" @submit.prevent="signIn">
      <div class="col-md-7 col-lg-4 bg-light p-5 rounded-2">
        <h2 class="h3 mb-3 text-center text-nowrap font-weight-normal fw-bold text-primary">
          <i class="bi bi-person-circle pe-2"></i>Admin Login
        </h2>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-secondary btn-block px-4 fw-bold" type="submit">
            Login as Admin
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

const { VITE_APP_API } = import.meta.env

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn() {
      const api = `${VITE_APP_API}admin/signin`
      this.$http
        .post(api, this.user)
        .then((response) => {
          if (response.data.success) {
            const { token, expired } = response.data
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Login Successful',
              timer: 1500,
              toast: true,
              color: '#14213d',
              background: '#fef8e2',
              showConfirmButton: false,
              timerProgressBar: true
            })
            this.$router.push('/admin/products')
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Login Failed',
              timer: 1500,
              toast: true,
              color: '#14213d',
              background: '#fef8e2',
              showConfirmButton: false,
              timerProgressBar: true
            })
          }
        })
        .catch((error) => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error.response.data.message}`,
            timer: 1500,
            toast: true,
            color: '#14213d',
            background: '#fef8e2',
            showConfirmButton: false,
            timerProgressBar: true
          })
        })
    }
  }
}
</script>
