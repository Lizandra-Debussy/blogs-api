module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    user_id: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    },
    {
      timestamps: false,
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