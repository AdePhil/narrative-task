<template>
  <div class="home">
    <div class="container">
      <div class="mt-6 d-flex justify-space-between align-center mb-6">
        <h3 class="mt-0 mb-0 headline">Buyers Order</h3>
        <NioButton @click="handleShowForm">
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
        :dataPackageOptions="dataPackageOptions"
        @saveCallback="saveCallback"
        :selectedOrder="selectedOrder"
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
} from "../services/buyerorder";
export default {
  name: "Home",
  components: { Loader, BuyerOrdersForm },
  data() {
    return {
      selectedOrder: {},
      showForm: false,
      loading: false,
      dataPackageOptions: [],
      columns: null,
      searchableProps: ["name", "package_name", "max_bid_price"],
      sortOptions: [
        {
          label: "Name [A-Z]",
          value: {
            itemProp: "name",
            propType: "String",
            order: "ascending",
          },
        },
        {
          label: "Name [Z-A]",
          value: {
            itemProp: "name",
            propType: "String",
            order: "descending",
          },
        },
      ],
      items: [],
    };
  },
  methods: {
    handleShowForm() {
      this.showForm = true;
    },
    handleHideForm() {
      this.showForm = false;
    },
    removeBuyerOrder(id) {
      this.loading = true;
      deleteBuyerOrder(id)
        .then(() => {
          this.fetchBuyerOrders();
        })
        .catch(() => {
          this.loading = false;
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
    saveCallback() {
      this.handleHideForm();
      this.fetchBuyerOrders();
    },
    fetchBuyerOrders() {
      this.loading = true;
      //simulate network request
      window.setTimeout(() => {
        getBuyerOrders()
          .then((res) => {
            this.items = res.data.map((item) => ({
              package_name: item?.data_package_type?.name,
              ...item,
            }));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false;
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
        console.log(error.message);
      }
    },
    menuItemClicked() {},
    makeColumns() {
      this.columns = [
        {
          name: "slat",
          props: {
            image: "imageSrc",
            title: "name",
            subtitle: "max_bid_price",
          },
        },
        {
          name: "max_bid_price",
          label: "Max Bid",
        },
        {
          name: "package_name",
          label: "Data Type",
        },
        {},
        {},
      ];
    },
  },
  mounted() {
    this.fetchBuyerOrders();
    this.fetchDataPackageType();
    this.makeColumns();
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
