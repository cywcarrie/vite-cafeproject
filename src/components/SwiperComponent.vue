<template>
  <VueLoading :active="isLoading" />
  <swiper
    class="pb-5"
    :modules="modules"
    :slides-per-view="1"
    :space-between="20"
    :pagination="{ clickable: true }"
    :breakpoints="{
      '480': {
        slidesPerView: 1.5
      },
      '576': {
        slidesPerView: 1.5
      },
      '768': {
        slidesPerView: 2
      },
      '992': {
        slidesPerView: 3
      },
      '1200': {
        slidesPerView: 4
      }
    }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false
    }"
  >
    <swiper-slide v-for="item in products" :key="item.id">
      <RouterLink :to="`/product/${item.id}`">
        <div class="card product-card box-shadow w-100 h-100 rounded-0">
          <img
            :src="item.imageUrl"
            class="card-img-top object-fit-cover rounded-0"
            alt="swiperImage"
          />
          <div class="card-body p-3">
            <div class="d-flex justify-content-start text-primary fw-bold">
              <p><i class="bi bi-house-heart me-2 fs-5"></i>{{ item.category }}</p>
            </div>
            <h4 class="card-title fw-bolder mb-4">{{ item.title }}</h4>
            <div class="d-flex justify-content-end align-items-center mb-3">
              <div class="fs-4 text-black-50" v-if="!item.price">
                NT${{ $filters.currency(item.origin_price) }}
              </div>
              <del class="fs-5 text-black-50" v-if="item.price">
                NT${{ $filters.currency(item.origin_price) }}</del
              >
              <div class="fs-4 text-danger fw-bold ps-2" v-if="item.price">
                NT${{ $filters.currency(item.price) }}
              </div>
            </div>
          </div>
        </div>
      </RouterLink>
    </swiper-slide>
  </swiper>
</template>

<script>
import VueLoading from './VueLoading.vue'
import { Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: {
    VueLoading,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      isLoading: false,
      products: [],
      modules: [Pagination, A11y, Autoplay]
    }
  },
  methods: {
    getProducts() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(url).then((response) => {
        this.isLoading = false
        this.products = response.data.products
        this.getSwiper()
      })
    },
    getSwiper() {
      const randomSwiper = []
      for (let i = 0; i < 6; i += 1) {
        const num = Math.floor(Math.random() * this.products.length)
        randomSwiper.push(this.products[num])
        this.products.splice(num, 1)
      }
      this.products = randomSwiper
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
