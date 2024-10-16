<template>
  <VueLoading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">
          Shopping Cart
        </h2>
      </div>
      <a
        href="#"
        title="Previous"
        class="text-black-50 hover-nav fw-bold mt-3"
        @click.prevent="$router.go(-1)"
        ><i class="bi bi-arrow-left-square-fill fs-2"></i
      ></a>
      <div class="d-flex justify-content-start mt-3 mb-4">
        <RouterLink class="btn btn-primary fw-bold rounded-0" to="/products"
          ><i class="bi bi-house-heart pe-2 fs-5"></i>Products Page</RouterLink
        >
      </div>
      <template v-if="cart.total !== 0">
        <div class="d-flex justify-content-center mt-5">
          <h2 class="fs-2 fw-bold text-primary">Your Cart</h2>
        </div>
        <div class="row flex-row mt-4 mb-5 py-5 bg-light">
          <div class="col-12 col-lg-8 mb-5 mb-lg-0">
            <div class="text-end mb-4">
              <button type="button" class="btn btn-outline-danger rounded-0" @click="deleteAllCart">
                <i class="bi bi-trash pe-1"></i>Clear Cart
              </button>
            </div>
            <div class="bg-light">
              <table class="table align-middle text-center table-light table-borderless">
                <thead class="table-secondary">
                  <tr>
                    <th class="text-nowrap">Product</th>
                    <th class="text-nowrap">Qty</th>
                    <th class="text-nowrap">Subtotal</th>
                    <th class="text-end"></th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr class="table-nowrap" v-for="item in cart.carts" :key="item.id">
                    <td
                      class="fw-bold text-primary cursor-pointer hover-nav"
                      @click="getProduct(item.product_id)"
                    >
                      {{ item.product.title }}
                    </td>
                    <td class="text-nowrap">
                      <div class="d-flex justify-content-center">
                        <div
                          class="d-flex justify-content-center align-items-center me-1 cart-qty-width"
                          :style="{ cursor: item.qty === 1 ? 'not-allowed' : 'pointer' }"
                        >
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-primary rounded-0"
                            :disabled="item.qty === 1"
                            @click="item.qty--, updateCart(item)"
                          >
                            <i class="bi bi-dash"></i>
                          </button>
                          <input
                            type="form"
                            class="form-control text-center rounded-0 border-0 bg-light"
                            min="1"
                            max="99"
                            v-model.number="item.qty"
                          />
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-primary rounded-0"
                            :disabled="item.qty === 99"
                            @click="item.qty++, updateCart(item)"
                          >
                            <i class="bi bi-plus"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td class="text-nowrap">
                      {{ $filters.currency(item.total) }}
                    </td>
                    <td>
                      <div class="d-flex justify-content-center">
                        <button
                          type="button"
                          class="btn border-0 d-none d-md-block"
                          @click="removeCartItem(item.id)"
                        >
                          <i class="bi bi-trash-fill text-primary"></i>
                        </button>
                        <button
                          type="button"
                          class="btn border-0 d-block d-md-none"
                          @click="removeCartItem(item.id)"
                        >
                          <i class="bi bi-x-lg text-danger"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-primary rounded-0">
              <div class="card-header bg-secondary rounded-0">
                <h4 class="text-center text-dark fw-bold">Order Total</h4>
              </div>
              <div class="card-body">
                <ul class="list-unstyled fs-6 fs-md-5 border-bottom mb-0">
                  <li class="d-flex align-items-center justify-content-between mb-4">
                    <div>Total</div>
                    <div>NT${{ $filters.currency(cart.total) }}</div>
                  </li>
                  <li
                    v-if="cart.final_total !== cart.total"
                    class="d-flex align-items-center justify-content-between mb-4"
                  >
                    <div class="text-danger">Special：</div>
                    <div class="text-danger">NT${{ $filters.currency(cart.final_total) }}</div>
                  </li>
                </ul>
                <div class="mt-4 border-bottom">
                  <div class="d-flex align-items-center mb-4">
                    <div class="fw-bold text-nowrap">GET<span class="fs-5"> 20% </span>OFF</div>
                    <div class="d-flex rounded-pill overflow-hidden border border-2 ms-2">
                      <span
                        class="d-flex align-items-center bg-primary text-white fs-6 ps-3 pe-2 py-1 fw-bold"
                      >
                        funniecafe
                      </span>
                      <button
                        @click="copyCouponCode"
                        class="btn d-flex align-items-center px-2 py-1 border-0 rounded-end rounded-0"
                        type="button"
                      >
                        <i class="bi bi-copy text-primary"></i>
                      </button>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-3">
                    <div class="input-group mb-3 coupon-input" v-if="cart.total !== 0">
                      <input
                        type="text"
                        class="form-control border-primary rounded-0"
                        v-model="coupon_code"
                        placeholder="Enter coupon code"
                      />
                      <button
                        class="btn btn-outline-primary rounded-0"
                        type="button"
                        @click="addCouponCode(coupon_code)"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                  <p class="d-flex align-items-center mb-3"></p>
                </div>
                <h4 class="fs-3 fs-md-2 fw-bold text-center pt-4 pb-2 pt-md-5 pb-md-3">
                  NT${{ $filters.currency(cart.final_total) }}
                </h4>
              </div>
              <RouterLink
                v-if="cart.total !== 0"
                class="btn btn-primary rounded-0 py-3 fs-5 fs-md-4 text-uppercase fw-bold"
                to="/checkout"
                >checkout</RouterLink
              >
            </div>
          </div>
        </div>
      </template>
      <template v-if="cart.total === 0">
        <div class="py-5 mb-5">
          <div class="text-center pt-4">
            <h2 class="fw-bolder mb-5">There are no items in your cart.</h2>
            <RouterLink class="btn btn-primary btn-lg fw-bold rounded-0" to="/products"
              >Shop Now !</RouterLink
            >
          </div>
        </div>
      </template>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import VueLoading from '@/components/VueLoading.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    VueLoading,
    FooterComponent
  },
  data() {
    return {
      coupon_code: ''
    }
  },
  methods: {
    ...mapActions(cartStore, [
      'getCart',
      'updateCart',
      'removeCartItem',
      'deleteAllCart',
      'getProduct',
      'addCouponCode',
      'copyCouponCode'
    ])
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'final_total', 'cart', 'isLoading'])
  },
  mounted() {
    this.getCart()
  }
}
</script>
