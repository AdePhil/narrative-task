module.exports = (sequelize, DataTypes) => {
  const DataPackageType = sequelize.define("data_package_type", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return DataPackageType;
};
