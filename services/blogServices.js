

const {PrismaClient}=require ('@prisma/client');
const prisma=new PrismaClient();

async function getBlogs() {
    const blogs = await prisma.blog.findMany({
      orderBy: {createdAt: "desc"}
    })
    return blogs;  
}

async function addBlog(requestBody){
  const newBlog = await prisma.blog.create({
    data: {
      title:requestBody.title,
      content:requestBody.content
    },
  });
  return(newBlog);
}

async function Check(blogId) {
  const checkBlog=await prisma.blog.findUnique({
    where: { id: parseInt(blogId) }
  })
  return checkBlog;
}

async function deleteaBlog(blogId){
   const blog=await prisma.blog.delete({ 
    where: { id: parseInt(blogId)}
  });
  return blog;
}

async function updateBlog(requestBody,blogId) {
  const blog= await prisma.blog.updateMany({
    where: { id: parseInt(blogId)},
    data:{
      title: requestBody.title,
      content: requestBody.content,
    }
  })
  return blog;
}

module.exports = {
  getBlogs,addBlog,Check,deleteaBlog,updateBlog
};



/* async function getUsersWithAchievements(userId) {
  try {
    const users = await prisma.user.findMany({
      where: { id: userId },
      include: { achievements: true }
    });
    return users;
  } catch (error) {
    console.error('Error displaying portfolio:', error);
    throw new Error('Failed to display portfolio.');
  }
}*/

/*async function deletePortfolio(req,res) {
 try {
  const {email}=req.body
  try {
    const checkUser=await prisma.user.findMany({
      where: { email: email }
    })
  } catch (error) {
    console.error('Error in checkUser controller:', error);
     res.json({ error: 'email is not exsisted' });
  }
  const deleteaAhievement=await prisma.achievement.deleteMany({
    where: { userEmail: email }
   });
  const deleteUser=await prisma.user.delete({ 
    where: { email: email }
  });
  res.json(deleteUser)
}
  catch (error) {
  console.error('Error in user controller:', error);
    res.json({ error: 'Failed to delete portfolio.' });
 }
}*/

/*async function updatePortfolio(req,res) {
  try {
   const {name, email, age ,title,content}=req.body
   try {
    const checkUser=await prisma.user.findMany({
      where: { email: email }
     })
   } catch (error) {
    console.error('Error in checkUser controller:', error);
    res.json({ error: 'email is not exsisted' });
   }
   const updateUser=await prisma.user.updateMany({
    where: { email: email },
    data:{
      name,
      age,
    },
  });
  const updateachievement=await prisma.achievement.updateMany({
   where: { userEmail: email },
   data:{
     title,
     content,
   }
 })
 res.json({message:"updateed is done"})
}
  catch (error) {
  console.error('Error in user controller:', error);
    res.status(500).json({ error: 'Failed to Update portfolio.' });
 }
}*/