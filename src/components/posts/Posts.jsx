import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://1.bp.blogspot.com/-SRrN8ohXWEw/XH3-W6UNJZI/AAAAAAAAFtk/eGYbbrahDDAO9w2O_r0iOHEprl59vkhZQCLcBGAs/w480/IMG-20190302-WA0018.jpg" />
      <Post img="https://1.bp.blogspot.com/-vBeof703eXU/XHk7rrl6RvI/AAAAAAAAFtY/1SuhpZ6YZB0GfGeg7XlEZpHkd2qmg1KqACLcBGAs/w480/IMG-20190224-WA0015.jpg" />
      <Post img="https://4.bp.blogspot.com/-0mG-bq7dwWQ/XHjRaDcJf7I/AAAAAAAAFtM/7VI4rBz1TL0pTCPA6clZuqlM-RmBT7-eACLcBGAs/w480/20190301120128.jpg"/>
      <Post img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
  );
}
