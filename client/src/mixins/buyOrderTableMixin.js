import { formatCurrency } from "../utils";

export default {
  data() {
    return {
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
    };
  },
  methods: {
    computeOrderNumber(item) {
      return `#${item.id}`;
    },
    computeBudget(item) {
      return formatCurrency(item.max_bid_price);
    },
    makeColumns() {
      this.columns = [
        {
          name: "slat",
          props: {
            image: "imageSrc",
            title: "name",
            subtitle: this.computeOrderNumber,
          },
        },
        {
          name: "max_bid_price",
          label: "Budget",
          computed: this.computeBudget,
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
    this.makeColumns();
  },
};
