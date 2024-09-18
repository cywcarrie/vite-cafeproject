<template>
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
  <section class="mb-5">
    <div class="container">
      <div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid">
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">{{ product.category }}</h2>
      </div>
      <a href="#" title="Previous" class="text-black-50 hover-nav fw-bold mt-3 rounded-0" @click.prevent="$router.go(-1)"><i class="bi bi-arrow-left-square-fill fs-2"></i></a>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start d-none d-md-block">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/" class="text-dark hover-nav fw-bold">Home</RouterLink></li>
          <li class="breadcrumb-item"><RouterLink to="/products" class="text-dark hover-nav fw-bold">Products</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row d-flex justify-content-center mb-5 mt-4 mt-md-0">
        <article class="col-lg-6">
          <img :src="product.imageUrl" alt="productImage" class="img-fluid mb-3 bg-cover bg-center rounded-0">
        </article>
        <div class="col-lg-6 d-flex flex-column">
          <div class="d-flex justify-content-start text-secondary fw-bold mt-4 mt-md-0">
            <p class="mb-4 fs-4"><i class="bi bi-house-heart me-2"></i>{{ product.category }}</p>
          </div>
          <div class="d-flex justify-content-start">
            <h2 class="m-0 fw-bold fs-1 text-primary">{{ product.title }}</h2>
          </div>
          <div class="mt-4 text-primary fw-bold fs-5">
            {{ product.description }}
          </div>
          <div class="mt-4 text-primary">
            <p class="fw-bold"><i class="bi bi-check-circle-fill pe-2"></i>Free Delivery on all orders</p>
          </div>
          <div class="mt-auto">
            <div class="d-flex justify-content-end align-items-center mt-4 pt-5">
              <div class="fs-4 text-black-50" v-if="!product.price">NT${{  $filters.currency(product.origin_price) }}</div>
              <del class="fs-5 text-black-50" v-if="product.price">NT${{ $filters.currency(product.origin_price) }}</del>
            </div>
            <div class="d-flex justify-content-end align-items-center mb-3">
              <div class="fs-4 ms-2 text-primary fw-bold" v-if="product.price"><span class="text-danger fs-3">Now Sales:</span> NT${{ $filters.currency(product.price) }}</div>
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <div class="d-flex align-items-center me-1"
              :style="{ cursor: qty === 1 ? 'not-allowed' : 'pointer' }">
                <button
                  type="button"
                  class="btn btn-primary rounded-0"
                  :disabled="qty === 1"
                  @click="qty--">
                  <i class="bi bi-dash"></i>
                </button>
                <label for="qty">
                  <input
                  type="form"
                  id="qty"
                  class="form-control text-center rounded-0"
                  min="1"
                  max="99"
                  v-model.number="qty"/>
                </label>
                <button type="button" class="btn btn-primary rounded-0" 
                @click="qty++"
                :disabled="qty === 99">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <button type="button" class="btn btn-secondary ms-1 text-nowrap fw-bold rounded-0" @click="addCart(product.id,qty)">
                <i class="bi bi-cart-fill pe-1"></i>Add To Cart
              </button>
            </div>              
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light py-5">
      <div class="container py-3">
        <h2 class="text-center fw-bolder text-primary text-nowrap mb-5">FAQs</h2>
        <FAQs />
      </div>
    </div>
    <div class="bg-white py-5">
      <div class="container py-3">
        <h2 class="text-center fw-bolder mb-5 text-primary text-nowrap">Hot Products</h2>
        <SwiperComponent />
      </div>
    </div>
  </section>
  <FooterComponent />
</template>

<script>
import { mapState , mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import FAQs from '@/components/UserFAQs.vue'
import SwiperComponent from '@/components/SwiperComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Swal from 'sweetalert2'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    FAQs,
    SwiperComponent,
    FooterComponent
  },
  data () {
    return {
      product: {},
      products: [],
      qty: 1,
      id: '',
      isLoading: false
    }
  },
  watch: {
    $route () {
      if (this.$route.params.productId !== undefined) {
        this.id = this.$route.params.productId
        this.getProduct()
      }
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    getProduct () {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.product = response.data.product
        }
      }).catch(error => {
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
    },
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
