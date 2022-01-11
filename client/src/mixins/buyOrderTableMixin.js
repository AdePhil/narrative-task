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
    this.makeColumns();
  },
};
