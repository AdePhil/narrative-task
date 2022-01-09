<template>
  <v-dialog
    v-model="showForm"
    max-width="600px"
    persistent
    class="overflow-hidden"
  >
    <v-card class="px-4">
      <v-card-title class="text-h5 pl-0">Fill Order</v-card-title>

      <nio-text-field
        v-model="form.name"
        :label="'Order Name'"
        :disabled="saving"
      ></nio-text-field>
      <nio-text-field
        v-model="form.max_bid_price"
        :label="'Maximum Bid Amount'"
        :disabled="saving"
      ></nio-text-field>
      <nio-select
        class="select"
        v-model="form.data_package_type_id"
        :items="dataPackageOptions"
        label="Choose an item"
        :disabled="saving"
      ></nio-select>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="red lighten-3"
          text
          @click="hideForm()"
          :disabled="saving"
        >
          cancel
        </v-btn>

        <v-btn
          color="blue darken-5"
          text
          @click.prevent="save"
          :disabled="saving"
        >
          {{ saving ? "Saving..." : "Save" }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { saveBuyerOrder, updateBuyerOrder } from "../services/buyerorder";
export default {
  data() {
    return {
      saving: false,
      form: {
        name: "",
        max_bid_price: "",
        data_package_type_id: "",
      },
    };
  },
  methods: {
    resetForm() {
      this.form = {
        name: "",
        max_bid_price: "",
        data_package_type_id: "",
      };
    },
    hideForm() {
      this.resetForm();
      this.$emit("handleHideForm");
    },
    async save() {
      //simulate network request
      const { id, ...payload } = this.form;
      console.log({ id });
      if (id) {
        this.handleEdit(id, payload);
        return;
      }
      this.handleCreate(payload);
    },
    handleCreate(payload) {
      this.saving = true;
      window.setTimeout(() => {
        saveBuyerOrder(payload)
          .then((res) => {
            this.hideForm();
            this.$emit("saveCallback");
            this.saving = false;
            this.$toast.success(res.data.message, {
              timeout: 2000,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }, 1500);
    },
    handleEdit(id, payload) {
      this.saving = true;
      window.setTimeout(() => {
        updateBuyerOrder(id, payload)
          .then((res) => {
            this.hideForm();
            this.$emit("saveCallback");
            this.saving = false;
            this.$toast.success(res.data.message, {
              timeout: 2000,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      }, 1500);
    },
  },
  props: {
    showForm: {
      type: Boolean,
      default: false,
    },
    dataPackageOptions: {
      type: Array,
      default: () => [],
    },
    selectedOrder: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    selectedOrder: function (newVal) {
      // watch it
      this.form = { ...this.form, ...newVal };
    },
  },
};
</script>
