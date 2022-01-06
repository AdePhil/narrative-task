<template>
  <div class="home">
    <div class="container">
      <div class="mt-6 d-flex justify-space-between align-center mb-6">
        <h3 class="mt-0 mb-0 headline">Buyers Order</h3>
        <NioButton>
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
              <v-list-item
                @click="menuItemClicked('updateBudget', slotProps.item)"
              >
                Update Order
              </v-list-item>
              <v-list-item
                @click="menuItemClicked('updateBudget', slotProps.item)"
              >
                Delete Order
              </v-list-item>
            </v-list>
          </template>
        </nio-slat-table>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "../components/Loader.vue";
import { getBuyerOrders } from "../services/buyerorder";
export default {
  name: "Home",
  components: { Loader },
  data() {
    return {
      loading: false,
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
          label: "Alphabetic [Z-A]",
          value: {
            itemProp: "orderName",
            propType: "String",
            order: "descending",
          },
        },
        {
          label: "Order number (lowest first)",
          value: {
            itemProp: "orderNumber",
            propType: "Number",
            order: "asscending",
          },
        },
        {
          label: "Order number (highest first)",
          value: {
            itemProp: "orderNumber",
            propType: "Number",
            order: "descending",
          },
        },
      ],
      items: [],
    };
  },
  methods: {
    getBuyerOrders,
    fetchBuyerOrders() {
      this.loading = true;
      getBuyerOrders()
        .then((res) => {
          this.items = res.data.data.map((item) => ({
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
