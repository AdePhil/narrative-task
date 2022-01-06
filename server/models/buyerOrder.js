module.exports = (sequelize, DataTypes) => {
  const BuyerOrder = sequelize.define("buyer_order", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    max_bid_price: {
      type: DataTypes.DECIMAL(12, 2),
    },
  });

  // BuyerOrder.associate = function (models) {

  // };

  return BuyerOrder;
};
