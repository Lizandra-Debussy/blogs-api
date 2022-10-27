module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    },
    {
      // timestamps: false,
      underscored: false,
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      as: 'users',
      foreignKey: 'id',
    });
  };
  return BlogPost;
};