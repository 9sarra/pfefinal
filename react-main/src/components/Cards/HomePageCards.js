import React from 'react';

const PostCard = ({ imageUrl, title, description }) => {
  return (
    <div className="mx-auto px-4 py-8 my-20">
      <div className="shadow-2xl rounded-lg mb-6 tracking-wide">
        <div className="md:flex-shrink-0">
          <img
            src={imageUrl}
            alt="mountains"
            className="w-full h-64 rounded-lg rounded-b-none"
          />
        </div>
        <div className="px-4 py-2 mt-2">
          <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
            {title}
          </h2>
          <p className="text-sm text-gray-700 px-2 mr-1">
            {description}
          </p>
          <div className="flex items-center justify-between mt-2 mx-6">
            <a href="#" className="text-blue-500 text-xs -ml-3">
              Show More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const PostCardList = ({ posts }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          imageUrl={post.imageUrl}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

const posts = [
  {
    id: 1,
    imageUrl: 'https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg',
    title: 'My Amazing Journey to the Mountains',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...',
  },
  {
    id: 1,
    imageUrl: 'https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg',
    title: 'My Amazing Journey to the Mountains',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...',
  },
  {
    id: 1,
    imageUrl: 'https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg',
    title: 'My Amazing Journey to the Mountains',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia, minus dolor praesentium officia maxime deserunt porro amet ab debitis deleniti modi soluta similique...',
  },
  
];

const Example = () => {
  return <PostCardList posts={posts} />;
};

export default Example;
