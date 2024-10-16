import { defineStore } from 'pinia'
import axios from 'axios'
import router from '@/router'
import ShowNotification from '@/mixins/swal'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    isLoading: false,
    carts: [],
    total: 0,
    final_total: 0,
    cart: {},
    isDone: ''
  }),
  actions: {
    getCart() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart`
      this.isLoading = true
      axios
        .get(url)
        .then((response) => {
          this.isLoading = false
          this.cart = response.data.data
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    addCart(id, qty = 1) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart`
      this.isDone = id
      const cart = {
        product_id: id,
        qty
      }
      this.isLoading = true
      axios
        .post(url, { data: cart })
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getCart()
            this.isDone = ''
            ShowNotification('success', 'Successfully added to cart')
          } else {
            ShowNotification('error', 'Failed to add to cart')
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    updateCart(item) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      axios
        .put(url, { data: cart })
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getCart()
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    removeCartItem(id) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/cart/${id}`
      this.isLoading = true
      axios
        .delete(url)
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getCart()
            ShowNotification('success', 'Removed from cart')
          } else {
            ShowNotification('error', 'Failed to remove from cart')
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    deleteAllCart() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/carts`
      this.isLoading = true
      axios
        .delete(url)
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getCart()
            ShowNotification('success', 'Removed all items')
          } else {
            ShowNotification('error', 'Failed to remove all items')
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    getProduct(id) {
      router.push(`/product/${id}`)
    },
    addCouponCode(coupon_code) {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/coupon`
      const coupon = {
        code: coupon_code
      }
      this.isLoading = true
      axios
        .post(url, { data: coupon })
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getCart()
            ShowNotification('success', 'Successfully applied')
          } else {
            ShowNotification('error', 'Failed to apply')
          }
        })
        .catch((error) => {
          ShowNotification('error', `${error.response.data.message}`)
        })
    },
    copyCouponCode() {
      const copyText = document.createElement('input')
      const text = 'funniecafe'
      copyText.select()
      copyText.setSelectionRange(0, 99999)
      navigator.clipboard.writeText(text).then(() => {
        ShowNotification('success', 'Successfully copied')
      })
    }
  }
})
