<template>
  <VueLoading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">
          Checkout Process
        </h2>
      </div>
      <div class="d-flex justify-content-center align-items-center my-5 mt-3">
        <h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header active">
          <span class="mb-1">STEP 1</span>
          <span>Information</span>
        </h6>
        <i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i>
        <h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header">
          <span class="mb-1">STEP 2</span>
          <span>Payment</span>
        </h6>
        <i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i>
        <h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header">
          <span class="mb-1">STEP 3</span>
          <span>Complete</span>
        </h6>
      </div>
      <div class="row my-5 py-5 bg-light rounded-2">
        <div class="col-lg-7">
          <h3 class="text-center fw-bold mb-4">Order Details</h3>
          <div class="table-responsive-md mb-5 mb-lg-0">
            <table class="table align-middle table-light table-borderless">
              <thead class="text-center table-secondary">
                <tr class="table-nowrap">
                  <th>Product</th>
                  <th class="text-nowrap">Qty</th>
                  <th class="text-end">Price</th>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                  <td class="table-nowrap fw-bold text-primary">{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-end text-nowrap">
                    <small v-if="cart.final_total !== cart.total" class="text-danger text-end"
                      >Special：</small
                    >
                    {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="text-end fs-5">Total</td>
                  <td class="text-end fs-5 text-primary fw-bold">
                    {{ $filters.currency(cart.total) }}
                  </td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="2" class="text-end text-danger fs-5">Special：</td>
                  <td class="text-end text-danger fs-5 fw-bold">
                    {{ $filters.currency(cart.final_total) }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="row col-lg-5">
          <h3 class="text-center fw-bold mb-4">Customer Details</h3>
          <FormVue v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="name" class="form-label"
                >Name<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="name"
                name="name"
                type="text"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['name'] }"
                placeholder="Please enter your name"
                rules="required"
                v-model="form.user.name"
              />
              <ErrorMessage name="name" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label"
                >Email<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="email"
                name="email"
                type="email"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="Please enter your email"
                rules="email|required"
                v-model="form.user.email"
              />
              <ErrorMessage name="email" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="tel" class="form-label"
                >Phone<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="tel"
                name="phone number"
                type="tel"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['phone number'] }"
                placeholder="Please enter your phone number"
                rules="required|numeric|min:7|max:11"
                v-model="form.user.tel"
              />
              <ErrorMessage name="phone number" class="invalid-feedback" />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label"
                >Delivery Address<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <FieldVue
                id="address"
                name="address"
                type="text"
                class="form-control rounded-0"
                :class="{ 'is-invalid': errors['address'] }"
                placeholder="Please enter your address"
                rules="required"
                v-model="form.user.address"
              />
              <ErrorMessage name="address" class="invalid-feedback" />
            </div>
            <div class="mb-4">
              <fieldset class="col-12 d-flex flex-column">
                <legend class="form-label mb-0 fs-6 fs-md-5 w-auto mb-2">
                  Payment Method<small class="ps-1 text-danger fw-bold">*</small>
                </legend>
                <div class="normal-input" :class="{ error: errors['Payment Method'] }">
                  <div class="d-flex">
                    <div class="form-check form-radio me-3">
                      <FieldVue
                        class="form-check-input"
                        type="radio"
                        name="Payment Method"
                        rules="required"
                        id="creditCard"
                        value="creditCard"
                        v-model="form.user.pay"
                      >
                      </FieldVue>
                      <label class="form-check-label" for="creditCard">Credit Card</label>
                    </div>
                    <div class="form-check form-radio">
                      <FieldVue
                        class="form-check-input"
                        type="radio"
                        name="Payment Method"
                        rules="required"
                        id="cash"
                        value="cash"
                        v-model="form.user.pay"
                      >
                      </FieldVue>
                      <label class="form-check-label" for="cash">Cash</label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="Payment Method"
                    class="error-text position-absolute text-danger"
                  />
                </div>
              </fieldset>
            </div>
            <div class="mb-3" v-if="form.user.pay === 'creditCard'">
              <label for="cardNum" class="form-label"
                >Card Number<small class="ps-1 text-danger fw-bold">*</small></label
              >
              <div class="row">
                <div class="col-12">
                  <FieldVue
                    id="cardNum"
                    name="Credit Card Number"
                    type="tel"
                    class="form-control rounded-0"
                    maxlength="19"
                    :class="{ 'is-invalid': errors['Credit Card Number'] }"
                    placeholder="**** **** **** ****"
                    rules="required"
                    v-model="cardNumber"
                  />
                  <ErrorMessage name="Credit Card Number" class="invalid-feedback" />
                  <div class="my-3 col-12 col-md-6">
                    <label for="period" class="form-label required"
                      >Expiration Date<small class="ps-1 text-danger fw-bold">*</small></label
                    >
                    <FieldVue
                      id="period"
                      name="Expiration Date"
                      type="tel"
                      class="form-control rounded-0"
                      placeholder="MM/YY"
                      maxlength="5"
                      v-model="expiryDate"
                      :class="{ 'is-invalid': errors['Expiration Date'] }"
                      rules="required"
                    />
                    <ErrorMessage name="Expiration Date" class="invalid-feedback" />
                  </div>
                  <div class="mb-3 col-12 col-md-6">
                    <label for="checkCode" class="form-label required"
                      >CVV<small class="ps-1 text-danger fw-bold">*</small></label
                    >
                    <FieldVue
                      id="checkCode"
                      name="CVV"
                      type="text"
                      class="form-control rounded-0"
                      maxlength="3"
                      :class="{ 'is-invalid': errors['CVV'] }"
                      placeholder="CVV"
                      rules="required|length:3|numeric:true"
                    />
                    <ErrorMessage name="CVV" class="invalid-feedback" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Comment</label>
              <textarea
                name=""
                id="message"
                class="form-control rounded-0"
                cols="30"
                rows="10"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <RouterLink class="btn btn-outline-primary rounded-0" to="/cart"
                ><i class="bi bi-caret-left-fill"></i>Previous</RouterLink
              >
              <button type="submit" class="btn btn-secondary check-btn rounded-0">
                Next<i class="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </FormVue>
        </div>
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import VueLoading from '@/components/VueLoading.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ShowNotification from '@/mixins/swal'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading,
    FooterComponent
  },
  data() {
    return {
      isLoading: false,
      total: 0,
      final_total: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          pay: ''
        },
        message: ''
      },
      coupon_code: '',
      expiryDate: '',
      cardNumber: ''
    }
  },
  watch: {
    cardNumber(newCardNumber, oldCardNumber) {
      if (
        newCardNumber.length < oldCardNumber.length &&
        newCardNumber.charAt(newCardNumber.length - 1) === ' '
      ) {
        this.cardNumber = oldCardNumber.slice(0, -2)
      }
      if (
        newCardNumber.length > oldCardNumber.length &&
        (newCardNumber.length + 1) % 5 === 0 &&
        this.cardNumber.length !== 0 &&
        this.cardNumber.length < 19
      ) {
        this.cardNumber = newCardNumber + ' '
      }
    },
    expiryDate(newExpiryDate, oldExpiryDate) {
      if (newExpiryDate.length === 2 && newExpiryDate.length > oldExpiryDate.length) {
        this.expiryDate += '/'
      } else if (
        newExpiryDate.length < oldExpiryDate.length &&
        oldExpiryDate.charAt(2) === '/' &&
        oldExpiryDate.length === 3
      ) {
        this.expiryDate = oldExpiryDate.slice(0, 1)
      }
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    createOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/order`
      const order = this.form
      this.$http
        .post(url, { data: order })
        .then((response) => {
          this.$router.push(`/checkorder/${response.data.orderId}`)
          this.getCart()
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  created() {
    this.getCart()
  }
}
</script>
