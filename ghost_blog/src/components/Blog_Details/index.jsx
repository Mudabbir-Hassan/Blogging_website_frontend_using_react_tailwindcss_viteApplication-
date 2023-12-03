import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState({});
  const { blogsId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../api/blogsData.json');
        const jsonData = await response.json();

        const filtered = jsonData.filter((blog) => parseInt(blogsId, 10) === blog.id);

        if (filtered.length > 0) {
          setBlogDetails(filtered[0]);
        } else {
          console.error(`Blog with ID ${blogsId} not found`);
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchData();
  }, [blogsId]);

  return (
    <div className="px-4 py-8 bg-red-950 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blogDetails.title}</h1>
        <div className="flex items-center space-x-2 mb-4">
          {blogDetails.tags &&
            blogDetails.tags.map((tag) => (
              <span key={tag} className="bg-gray-800 px-2 py-1 text-xs rounded">
                {tag}
              </span>
            ))}
        </div>
        <img src={blogDetails.image} alt={blogDetails.title} className="mb-4 rounded-lg" />
        <p className="text-gray-400 text-sm">
          {blogDetails.published_date} • {blogDetails.reading_time}
        </p>
        <p className="text-gray-300 mt-4">{blogDetails.content}</p>
        <div className="mt-8">
          <p className="text-gray-400">Author: {blogDetails.author}</p>
          <img src={blogDetails.authorPic} alt={blogDetails.author} className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
