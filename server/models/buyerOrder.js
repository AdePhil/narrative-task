module.exports = (sequelize, DataTypes) => {
  const BuyerOrder = sequelize.define("buyer_order", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_bid_price: {
      type: DataTypes.DECIMAL(12, 2),
    },
    data_package_type_id: {
      type: DataTypes.INTEGER,
    },
  });

  BuyerOrder.associate = function (models) {
    BuyerOrder.belongsTo(models.DataPackageType, {
      foreignKey: "data_package_type_id",
      as: "data_package_type",
    });
  };

  return BuyerOrder;
};
