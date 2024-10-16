<template>
  <VueLoading :active="isLoading" />
  <section class="mb-5">
    <div class="container">
      <div
        class="d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid"
      >
        <h2 class="position-absolute text-center text-white fw-bolder banner-title">
          Our Products
        </h2>
      </div>
      <nav aria-label="breadcrumb" class="mt-3 mb-md-4 d-flex justify-content-start">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-dark hover-nav fw-bold">Home</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <div class="row my-5">
        <div class="col-lg-3 mb-4 mb-lg-0">
          <div class="d-none d-md-block">
            <h3
              class="text-start text-primary pb-3 fw-bold fs-4 border-bottom border-primary border-2"
            >
              Products
            </h3>
            <div class="list-group list-group-flush text-start">
              <button
                type="button"
                class="list-group-item list-group-item-action fw-bold"
                aria-current="true"
                @click="selectCategory = ''"
                :class="{ active: selectCategory === '' }"
              >
                <i class="bi bi-house-heart me-2"></i>
                All
              </button>
              <button
                v-for="item in categories"
                :key="item"
                type="button"
                class="list-group-item list-group-item-action fw-bold"
                :class="{ active: item === selectCategory }"
                @click="selectCategory = item"
              >
                <i class="bi bi-house-heart me-2"></i>
                {{ item }}
              </button>
            </div>
          </div>
          <div class="dropdown d-block d-md-none w-100">
            <button
              class="btn btn-secondary dropdown-toggle w-100 fw-bold"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Products
            </button>
            <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  @click="selectCategory = ''"
                  :class="{ active: selectCategory === '' }"
                  class="dropdown-item fw-bold"
                  type="button"
                >
                  <i class="bi bi-house-heart me-2"></i>All
                </button>
              </li>
              <li>
                <button
                  v-for="item in categories"
                  :key="item"
                  :class="{ active: item === selectCategory }"
                  @click="selectCategory = item"
                  class="dropdown-item fw-bold"
                  type="button"
                >
                  <i class="bi bi-house-heart me-2"></i>{{ item }}
                </button>
              </li>
            </ul>
          </div>
          <div class="input-group mt-4 mb-3">
            <input
              type="text"
              class="form-control border border-primary border-2 rounded-0"
              placeholder="Keywords..."
              v-model="search"
            />
          </div>
        </div>
        <template v-if="search">
          <div class="col-lg-9">
            <div class="mb-3">
              <div class="fs-5">
                The following shows the results of
                <span class="fs-4 text-primary fw-bold">{{ search }}</span>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm ms-2 text-uppercase"
                  @click="getProducts()"
                >
                  <i class="bi bi-x-circle pe-1"></i>Cancel
                </button>
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div class="col mb-4" v-for="item in searchProducts" :key="item.id">
                <div class="card product-card w-100 h-100">
                  <RouterLink :to="`/product/${item.id}`">
                    <div class="product-img cursor-pointer" @click="getProduct(item.id)">
                      <img
                        :src="item.imageUrl"
                        class="card-img-top object-fit-cover"
                        alt="productImages"
                      />
                      <span
                        class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold"
                      >
                        <i class="bi bi-search pe-1"></i>
                        See More
                      </span>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex justify-content-start text-primary fw-bold">
                        <p><i class="bi bi-house-heart me-2"></i>{{ item.category }}</p>
                      </div>
                      <h5 class="card-title fw-bolder text-primary mb-3">{{ item.title }}</h5>
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="h5 text-secondary" v-if="!item.price">
                          NT${{ $filters.currency(item.origin_price) }}
                        </div>
                        <del class="h6 text-secondary" v-if="item.price"
                          >NT${{ $filters.currency(item.origin_price) }}</del
                        >
                        <div class="h5 text-primary fw-bold" v-if="item.price">
                          NT${{ $filters.currency(item.price) }}
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                  <div class="card-footer border-0 bg-transparent pt-0 pb-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary w-100"
                      :class="{ disabled: isDone === item.id }"
                      @click="addCart(item.id, qty)"
                    >
                      <i class="bi bi-cart-fill"></i>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="searchProducts.length === 0" class="col text-center mt-5">
              <h2 class="fw-bolder">No products found</h2>
              <i class="bi bi-bag-x fs-1"></i>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="col-lg-9">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
              <div class="col mb-4" v-for="item in filterProducts" :key="item.id">
                <div class="card product-card w-100 h-100 rounded-0">
                  <RouterLink :to="`/product/${item.id}`">
                    <div class="product-img cursor-pointer" @click="getProduct(item.id)">
                      <img
                        :src="item.imageUrl"
                        class="card-img-top object-fit-cover rounded-0"
                        alt="productImages"
                      />
                      <span
                        class="seemore-text d-flex justify-content-center align-items-center text-white fw-bold"
                      >
                        <i class="bi bi-search pe-1"></i>
                        See More
                      </span>
                    </div>
                    <div class="card-body p-3">
                      <div class="d-flex justify-content-start text-primary fw-bold">
                        <p><i class="bi bi-house-heart me-2"></i>{{ item.category }}</p>
                      </div>
                      <h5 class="card-title fw-bolder text-primary mb-3">{{ item.title }}</h5>
                      <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="h5 text-secondary" v-if="!item.price">
                          NT${{ $filters.currency(item.origin_price) }}
                        </div>
                        <del class="h6 text-secondary" v-if="item.price"
                          >NT${{ $filters.currency(item.origin_price) }}</del
                        >
                        <div class="h5 text-primary fw-bold" v-if="item.price">
                          NT${{ $filters.currency(item.price) }}
                        </div>
                      </div>
                    </div>
                  </RouterLink>
                  <div class="card-footer border-0 bg-transparent pt-0 pb-3">
                    <button
                      type="button"
                      class="btn btn-outline-primary w-100 rounded-0"
                      :class="{ disabled: isDone === item.id }"
                      @click="addCart(item.id, qty)"
                    >
                      <i class="bi bi-cart-fill"></i>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
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
      products: [],
      search: '',
      categories: [],
      selectCategory: '',
      isLoading: false,
      id: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart']),
    getProducts() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/products/all`
      this.search = ''
      this.isLoading = true
      this.$http
        .get(url)
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.products = response.data.products
            this.getCategories()
            const { productCategory } = this.$route.params
            if (productCategory) {
              this.selectCategory = productCategory
            }
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    getCategories() {
      const categories = new Set()
      this.products.forEach((item) => {
        categories.add(item.category)
      })
      this.categories = [...categories]
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`)
    }
  },
  computed: {
    ...mapState(cartStore, ['isDone']),
    filterProducts() {
      return this.products.filter((item) => item.category.match(this.selectCategory))
    },
    searchProducts() {
      return this.products.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.category.toLowerCase().includes(this.search.toLowerCase())
        )
      })
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
