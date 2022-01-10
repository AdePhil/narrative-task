<template>
  <div class="home">
    <div class="container">
      <div class="mt-6 d-flex justify-space-between align-center mb-6">
        <h3 class="mt-0 mb-0 headline">Buyers Order</h3>
        <NioButton @click="addBuyerOrder">
          <nio-icon name="utility-plus" size="16" color="#fff"></nio-icon>
          &nbsp; Add Order
        </NioButton>
      </div>
      <loader v-if="loading" />
      <div v-else class="pt-8 pb-6">
        <nio-slat-table
          :items="items"
          :columns="columns"
          v-if="columns && items"
          search-sort-header
          :searchableProps="searchableProps"
          :sortOptions="sortOptions"
          action="menu"
          pagination
          :itemsPerPageOptions="[1, 2, 4, -1]"
          :initialItemsPerPage="4"
        >
          <template v-slot:item-menu="slotProps">
            <v-list>
              <v-list-item @click="handleEditForm(slotProps.item)">
                Edit
              </v-list-item>
              <v-list-item @click="removeBuyerOrder(slotProps.item.id)">
                Delete
              </v-list-item>
            </v-list>
          </template>
        </nio-slat-table>
      </div>
      <buyer-orders-form
        :showForm="showForm"
        @handleShowForm="handleShowForm"
        @handleHideForm="handleHideForm"
        @handleCreate="handleCreate"
        @handleEdit="handleEdit"
        :dataPackageOptions="dataPackageOptions"
        :selectedOrder="selectedOrder"
        :saving="saving"
      />
    </div>
  </div>
</template>

<script>
import BuyerOrdersForm from "../components/BuyerOrdersForm.vue";
import Loader from "../components/Loader.vue";
import {
  getBuyerOrders,
  getDataPackageType,
  deleteBuyerOrder,
  saveBuyerOrder,
  updateBuyerOrder,
} from "../services/buyerorder";
import buyersOrderTableMixin from "../mixins/buyersOrderTableMixin";
export default {
  name: "Home",
  components: { Loader, BuyerOrdersForm },
  mixins: [buyersOrderTableMixin],
  data() {
    return {
      selectedOrder: {},
      showForm: false,
      saving: false,
      loading: false,
      dataPackageOptions: [],
      items: [],
    };
  },
  methods: {
    addBuyerOrder() {
      this.handleShowForm();
    },
    handleShowForm() {
      this.showForm = true;
    },
    handleHideForm() {
      this.showForm = false;
    },
    removeBuyerOrder(id) {
      this.loading = true;
      deleteBuyerOrder(id)
        .then((res) => {
          this.$toast.success(res.message, {
            timeout: 2000,
          });
          this.fetchBuyerOrders();
        })
        .catch((error) => {
          this.loading = false;
          this.$toast.error(error.message, {
            timeout: 2000,
          });
        });
    },
    handleEditForm(item) {
      this.selectedOrder = {
        id: item.id,
        name: item.name,
        max_bid_price: item.max_bid_price,
        data_package_type_id: item.data_package_type_id,
      };
      this.handleShowForm();
    },
    handleCreate(payload) {
      this.saving = true;
      // simulate loading state
      window.setTimeout(() => {
        saveBuyerOrder(payload)
          .then((res) => {
            this.handleHideForm();
            this.fetchBuyerOrders();
            this.saving = false;
            this.$toast.success(res.message, {
              timeout: 2000,
            });
          })
          .catch((error) => {
            this.saving = false;
            this.$toast.error(error.message, {
              timeout: 2000,
            });
          });
      }, 1500);
    },
    handleEdit({ id, payload }) {
      this.saving = true;
      window.setTimeout(() => {
        updateBuyerOrder(id, payload)
          .then((res) => {
            this.handleHideForm();
            this.fetchBuyerOrders();
            this.saving = false;
            this.$toast.success(res.message, {
              timeout: 2000,
            });
          })
          .catch((error) => {
            this.saving = false;
            this.$toast.error(error.message, {
              timeout: 2000,
            });
          });
      }, 1500);
    },
    fetchBuyerOrders() {
      this.loading = true;
      //simulate network request
      window.setTimeout(() => {
        getBuyerOrders()
          .then((res) => {
            this.loading = false;
            this.items = res.data.map((item) => ({
              package_name: item?.data_package_type?.name,
              ...item,
            }));
          })
          .catch((error) => {
            this.loading = false;
            this.$toast.error(error.message, {
              timeout: 2000,
            });
          });
      }, 1500);
    },
    async fetchDataPackageType() {
      try {
        const res = await getDataPackageType();
        this.dataPackageOptions = res.data.map((dataPackage) => ({
          ...dataPackage,
          text: dataPackage.name,
          value: dataPackage.id,
        }));
      } catch (error) {
        this.$toast.error(error.message, {
          timeout: 2000,
        });
      }
    },
  },
  mounted() {
    this.fetchBuyerOrders();
    this.fetchDataPackageType();
  },
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
