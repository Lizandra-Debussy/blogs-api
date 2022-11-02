// const { Category } = require('../models');

// const fieldsValidate = (req, res, next) => {
//   const { title, content } = req.body;

//   if (!title || title === '' || !content || content === '') {
//   return res.status(400).json({ message: 'Some required fields are missing' });
//   }
//   next();
// };

// const categoryIdValidate = async (req, res, next) => {
//   const { categoryIds } = req.body;

//   if (!categoryIds || categoryIds.length === 0) {
//     return res.status(400).json({ message: 'Some required fields are missing' }); 
//   }

//   const verifyCategory = categoryIds.map((id) => 
//     Category.findOne({
//       where: { id },
//     }));

//   const promiseCategory = await Promise.all(verifyCategory);
 
//   const result = promiseCategory.includes(categoryIds);
//   if (result === false) {
//     return res.status(400).json({ message: 'One or more "categoryIds" not found' });
//   }
//   console.log(result);
  
//   next();
// };

// module.exports = { fieldsValidate, categoryIdValidate };