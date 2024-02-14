import "./posts.css";
import { useAuth } from "../../AuthContext";
import { Navigate } from 'react-router-dom';

const Posts = () => {
  const { token } = useAuth();
  if (!token) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="posts">POSTS</div>
  );
};

export default Posts;