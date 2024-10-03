<template>
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">
          Checkout Process
        </h2>
      </div>
      <div class="d-flex justify-content-center align-items-center mb-5 mt-3">
        <h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header">
          <span class="mb-1">STEP 1</span>
          <span>Information</span>
        </h6>
        <i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i>
        <h6
          class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"
          :class="{ active: order.is_paid === false }"
        >
          <span class="mb-1">STEP 2</span>
          <span>Payment</span>
        </h6>
        <i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i>
        <h6
          class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"
          :class="{ active: order.is_paid === true }"
        >
          <span class="mb-1">STEP 3</span>
          <span>Complete</span>
        </h6>
      </div>
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10">
          <div
            class="d-flex justify-content-center align-items-center mt-5"
            v-if="order.is_paid === true"
          >
            <i class="bi bi-check-circle-fill fs-2 pe-2 text-success"></i>
            <h2 class="fw-bold mb-0 text-success">Success !</h2>
          </div>
          <h6 class="fw-bold mt-4 mb-5 text-center" v-if="order.is_paid === true">
            A confirmation as been sent to your email !
          </h6>
          <div class="my-5 row justify-content-center">
            <h3 class="text-center fw-bold mb-4">Order Details</h3>
            <form class="col-lg-6" @submit.prevent="payOrder">
              <table class="table align-middle table-light table-borderless mb-4">
                <thead class="text-center bg-light">
                  <tr>
                    <th class="text-nowrap">Product</th>
                    <th class="text-center text-nowrap">Qty</th>
                    <th class="text-nowrap">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td class="text-center text-primary fw-bold">{{ item.product.title }}</td>
                    <td class="text-center text-nowrap">{{ item.qty }}</td>
                    <td class="text-center text-nowrap">
                      {{ $filters.currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-end text-nowrap">Total</td>
                    <td class="fs-5 text-primary fw-bold text-nowrap">
                      {{ $filters.currency(order.total) }}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <h3 class="text-center fw-bold mb-4">Customer Details</h3>
              <table class="table table-light table-borderless mb-4">
                <tbody>
                  <tr class="table-nowrap">
                    <th width="100" class="text-nowrap">Email</th>
                    <td class="text-nowrap">{{ order.user.email }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th class="text-nowrap">Name</th>
                    <td class="text-nowrap">{{ order.user.name }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th class="text-nowrap">Phone</th>
                    <td class="text-nowrap">{{ order.user.tel }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th>Address</th>
                    <td class="text-nowrap">{{ order.user.address }}</td>
                  </tr>
                  <tr class="table-nowrap">
                    <th>Payment Status</th>
                    <td>
                      <span v-if="!order.is_paid" class="text-nowrap text-danger fw-bold"
                        >Not Yet Paid</span
                      >
                      <span v-else class="text-success fw-bold text-nowrap">Payment Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-end" v-if="order.is_paid === false">
                <button class="btn btn-primary ms-auto rounded-0" type="submit">
                  Confirm Payment<i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
              <div class="text-end" v-if="order.is_paid === true">
                <RouterLink to="/products" class="btn btn-primary ms-auto rounded-0"
                  ><i class="bi bi-cart4 pe-1 fs-5"></i>Continue Shopping</RouterLink
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue'
import Swal from 'sweetalert2'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    FooterComponent
  },
  data() {
    return {
      order: {
        user: {}
      },
      orderId: '',
      isLoading: false
    }
  },
  methods: {
    getOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/order/${this.orderId}`
      this.$http
        .get(url)
        .then((response) => {
          if (response.data.success) {
            this.order = response.data.order
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
    },
    payOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/pay/${this.orderId}`
      this.$http
        .post(url)
        .then((response) => {
          if (response.data.success) {
            this.getOrder()
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
  },
  created() {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
