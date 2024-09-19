<template>
  <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
  <table class="table mt-4">
    <thead>
      <tr>
        <th>購買時間</th>
        <th>Email</th>
        <th>購買款項</th>
        <th>應付金額</th>
        <th>是否付款</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item in orders" :key="`orders ${item.id}`">
        <tr v-if="orders.length" :class="{ 'text-secondary': !item.is_paid }">
          <td>{{ $filters.date(item.create_at) }}</td>
          <td><span v-text="item.user.email" v-if="item.user"></span></td>
          <td>
            <ul class="list-unstyled">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }} 數量：{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td class="text-right">{{ item.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                :id="`paidSwitch${item.id}`"
                v-model="item.is_paid"
                @change="updatePaid(item)"
              />
              <label class="form-check-label" :for="`paidSwitch${item.id}`">
                <span v-if="item.is_paid">已付款</span>
                <span v-else>未付款</span>
              </label>
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm rounded-0"
                type="button"
                @click="openModal(item)"
              >
                檢視
              </button>
              <button
                class="btn btn-outline-danger btn-sm rounded-0"
                type="button"
                @click="openDelOrderModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
  <OrderModal :order="tempOrder" ref="orderModal" @update-paid="updatePaid" />
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder" />
  <Pagination :pages="pagination" @emit-pages="getOrders" />
</template>

<script>
import DelModal from '@/components/DelModal.vue'
import OrderModal from '@/components/OrderModal.vue'
import Pagination from '@/components/PaginationComponent.vue'
import Swal from 'sweetalert2'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    Pagination,
    DelModal,
    OrderModal
  },
  methods: {
    getOrders(currentPage = 1) {
      this.currentPage = currentPage
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/orders?page=${currentPage}`
      this.isLoading = true
      this.$http.get(url, this.tempProduct).then((response) => {
        this.orders = response.data.orders
        this.pagination = response.data.pagination
        this.isLoading = false
      })
    },
    openModal(item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    updatePaid(item) {
      this.isLoading = true
      const api = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http
        .put(api, { data: paid })
        .then((response) => {
          this.isLoading = false
          if (response.data.success) {
            this.getOrders(this.currentPage)
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '更新付款狀態成功',
              timer: 1500,
              toast: true,
              color: '#14213d',
              background: '#fef8e2',
              showConfirmButton: false,
              timerProgressBar: true
            })
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: '更新付款狀態失敗',
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
    },
    delOrder() {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http
        .delete(url)
        .then((response) => {
          this.isLoading = false
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          if (response.data.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '刪除成功',
              timer: 1500,
              toast: true,
              color: '#14213d',
              background: '#fef8e2',
              showConfirmButton: false,
              timerProgressBar: true
            })
            this.getOrders(this.currentPage)
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: '刪除失敗',
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
  },
  created() {
    this.getOrders()
  }
}
</script>
