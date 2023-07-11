const express = require('express')
const { getAllBlogs, updateBlog, getBlogById, deleteBlog, createBlog, userBlog } = require('../controller/blogController')

//router Object
const router = express.Router()

// routes
// Get || all blogs
router.get('/allblog', getAllBlogs)

// POST || CREATE LOG
router.post('/createblog', createBlog)

// PUT || UPDATEBLOG
router.put('/updateblog/:id', updateBlog)

// Get || SINGLE BLOG DETAILS
router.get('/getblog/:id', getBlogById)

// DELETE || DELETE
router.delete('/deleteblog/:id', deleteBlog)

//Get || user blog
router.get("/userblog/:id", userBlog)


module.exports = router;
