const Mongoose  = require('mongoose');

const connect = () =>{
    return Mongoose.connect('mongodb://localhost:27017/mongoDemo');
}

const blog = new Mongoose.Schema({
    title: {
        type:String,
        required:true,

    },
    description: String,

    tags: [{type: String}]
})

const Blog = Mongoose.model('blog', blog);


connect()
.then(async connection => {
     const b = await Blog.create({title: 'Learn Node', description: 'Learning is the constant in your life' });
     console.log(b);
})
.catch(err => console.error(err))