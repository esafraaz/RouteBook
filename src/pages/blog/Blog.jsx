import { Spinner } from 'flowbite-react';
import  { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
const posts = [
  {
    "id": 101,
    "title": "Effective Social Media Strategies",
    "href": "#",
    "description": "Learn powerful strategies to boost your social media presence and engagement. Discover effective techniques to connect with your audience and drive results.",
    "date": "Apr 22, 2020",
    "datetime": "2020-04-22",
    "category": { "title": "Social Media", "href": "#" },
    "author": {
      "name": "Jessica Turner",
      "role": "Digital Marketing Specialist",
      "href": "#",
      "imageUrl": "https://i.ibb.co/TW228qF/photo-1554151228-14d9def656e4.jpg"
    }
  },
  {
    "id": 102,
    "title": "Mastering Responsive Web Design",
    "href": "#",
    "description": "Explore the principles and best practices of responsive web design. Ensure your websites look stunning on all devices with this comprehensive guide.",
    "date": "May 10, 2020",
    "datetime": "2020-05-10",
    "category": { "title": "Web Development", "href": "#" },
    "author": {
      "name": "Alex Reynolds",
      "role": "Frontend Developer",
      "href": "#",
      "imageUrl": "https://i.ibb.co/vxjHvV4/photo-1438761681033-6461ffad8d80.jpg"
    }
  },
  {
    "id": 103,
    "title": "The Art of Code Debugging",
    "href": "#",
    "description": "Uncover advanced techniques for debugging code effectively. Learn how to identify and fix bugs efficiently, making your development process smoother.",
    "date": "Jun 5, 2020",
    "datetime": "2020-06-05",
    "category": { "title": "Software Development", "href": "#" },
    "author": {
      "name": "Emily Harris",
      "role": "Senior Software Engineer",
      "href": "#",
      "imageUrl": "https://i.ibb.co/Yhcm0kt/photo-1544005313-94ddf0286df2.jpg"
    }
  },
  {
    "id": 104,
    "title": "Remote Work Productivity Hacks",
    "href": "#",
    "description": "Discover proven strategies to enhance your productivity while working remotely. Stay focused, organized, and motivated in a virtual work environment.",
    "date": "Jul 20, 2020",
    "datetime": "2020-07-20",
    "category": { "title": "Remote Work", "href": "#" },
    "author": {
      "name": "Daniel Martinez",
      "role": "Remote Work Consultant",
      "href": "#",
      "imageUrl": "https://i.ibb.co/PD66cB9/photo-1552058544-f2b08422138a.jpg"
    }
  }
  // More posts...
]


const Blog = () => {
  const {loading } = useContext(AuthContext);

  if(loading) {
    return <div className='text-center mt-28'>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  }


  return (
    <div>
      <div className="bg-green-900 text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl">From the Community</h2>
            <p className="mt-2 text-lg leading-8 text-green-50">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 border-t border-green-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col border-r-2 pr-3 items-end justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-green-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-green-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative text-end">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-green-50 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-green-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-300 ">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog