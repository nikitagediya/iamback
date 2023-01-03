import Post from "../post/Post";
import "./posts.scss"

export const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Nikita Gediya",
      userId: 1,
      profilePic: "https://www.thestatesman.com/wp-content/uploads/2020/07/iStock-667315360.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://www.proflowers.com/blog/wp-content/uploads/2019/06/inspirational-friendship-quotes-preview.jpg"
    },
    {
      id: 2,
      name: "Nikita Gediya",
      userId: 2,
      profilePic: "https://www.thestatesman.com/wp-content/uploads/2020/07/iStock-667315360.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://www.proflowers.com/blog/wp-content/uploads/2019/06/inspirational-friendship-quotes-preview.jpg"
    },
    {
      id: 3,
      name: "Nikita Gediya",
      userId: 3,
      profilePic: "https://www.proflowers.com/blog/wp-content/uploads/2019/06/inspirational-friendship-quotes-preview.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://www.thestatesman.com/wp-content/uploads/2020/07/iStock-667315360.jpg"
    },
    {
      id: 4,
      name: "Nikita Gediya",
      userId: 4,
      profilePic: "https://www.proflowers.com/blog/wp-content/uploads/2019/06/inspirational-friendship-quotes-preview.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis!",
      img: "https://www.thestatesman.com/wp-content/uploads/2020/07/iStock-667315360.jpg"
    }

  ];
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
};

export default Posts;