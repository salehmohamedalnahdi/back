const express= require('express')
const router = express.Router();
const controllerBlogs=require('../controller/blogControllers.js')

router.get("/blogs",controllerBlogs.showBlogs)
router.post('/create',controllerBlogs.createBlog);
router.delete("/delete/:blogId",controllerBlogs.deleteaBlog)
router.patch("/update/:blogId",controllerBlogs.updateBlog)

module.exports = router;

