module.exports = (sequelize, DataTypes) => {
  const BuyOrder = sequelize.define(
    "buy_order",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      max_bid_price: {
        type: DataTypes.DECIMAL(12, 2),
      },
    },
    {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return BuyOrder;
};
