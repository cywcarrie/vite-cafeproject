<template>
  <div>
    <LoadingVue :active="isLoading" :loader="'bars'" :color="'#6c584c'" :width="70" :height="70" />
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in coupons" :key="`coupon ${item.id}`">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            type="button"
            @click="openCouponModal(false, item)"
            >編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            type="button"
            @click="openDelCouponModal(item)"
            >刪除</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <couponModal :coupon="tempCoupon" ref="couponModal"
    @update-coupon="updateCoupon"/>
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"/>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'
import Swal from 'sweetalert2'

const { VITE_APP_API, VITE_APP_PATH } = import.meta.env

export default {
  components: { CouponModal, DelModal },
  props: {
    config: Object
  },
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  methods: {
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.showModal()
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    getCoupons () {
      this.isLoading = true
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/coupons`
      this.$http.get(url, this.tempProduct).then((response) => {
        this.coupons = response.data.coupons
        this.isLoading = false
      })
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        const url = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon }).then((response) => {
          if (response.data.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '新增優惠劵成功',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          }else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: '新增優惠劵失敗',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
          }    
        })
      } else {
        const url = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon }).then((response) => {
          if (response.data.success) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '更新優惠劵成功',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: '更新優惠劵失敗',
              timer: 1500,
              toast: true,
              color: "#14213d",
              background: "#fef8e2",
              showConfirmButton: false,
              timerProgressBar: true
            })
          }    
        }).catch((error) => {
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
        });
      }
    },
    delCoupon () {
      const url = `${VITE_APP_API}api/${VITE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        if (response.data.success) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '刪除優惠劵成功',
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
          const delComponent = this.$refs.delModal
          delComponent.hideModal()
          this.getCoupons()
        } else {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: '刪除優惠劵失敗',
            timer: 1500,
            toast: true,
            color: "#14213d",
            background: "#fef8e2",
            showConfirmButton: false,
            timerProgressBar: true
          })
        }    
      }).catch((error) => {
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
      });
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
