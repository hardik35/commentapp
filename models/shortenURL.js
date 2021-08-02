module.exports = (sequelize, DataTypes) => {
  const shortenURL = sequelize.define('URLShorts', {
    shortURL: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    longURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return shortenURL;
};