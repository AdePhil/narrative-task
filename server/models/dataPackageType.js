module.exports = (sequelize, DataTypes) => {
  const DataPackageType = sequelize.define(
    "data_package_type",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return DataPackageType;
};
