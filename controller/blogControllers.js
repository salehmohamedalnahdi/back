const service = require('../services/blogServices');

async function showBlogs(req, res) {
  try {
    const blogs = await service.getBlogs();
    res.json(blogs);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: 'Failed to display blog.' });
  }
}

async function createBlog(req,res){
  try {
    const requestBody=req.body
    const newBlog=await service.addBlog(requestBody)
    res.json(newBlog);
  } catch (error) {
    console.error('Error in controller:', error);
    res.status(500).json({ error: 'Failed to create blog.' });
  }
}

async function deleteaBlog(req,res) {
 try {
  const blogId=req.params.blogId
  const checkBlog= await service.Check(blogId)
  if(!checkBlog){
    return res.json({ error: 'blog is not exsisted' });
  }
 const deleteaBlog=await service.deleteaBlog(blogId)
  res.json(deleteaBlog)
}
  catch (error) {
  console.error('Error in controller:', error);
    res.json({ error: 'Failed to delete blog.' });
 }
}

async function updateBlog(req,res) {
  try {
   //the body must be as {title:"",content:""}
   const requestBody=req.body
   const blogId=req.params.blogId
   const checkBlog= await service.Check(blogId)
   if(!checkBlog){
     return res.json({ error: 'blog is not exsisted' });
   }
   const blog= await service.updateBlog(requestBody,blogId)
  console.log("updateed is done")
  res.json(requestBody)
 }
   catch (error) {
   console.error('Error in controller:', error);
     res.json({ error: 'Failed to Update blog.' });
  }
 }

module.exports = {
  showBlogs,createBlog,deleteaBlog,updateBlog
};

