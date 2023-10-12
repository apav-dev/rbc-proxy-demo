export interface BlogSectionProps {
  blogs?: {
    id: number;
    name: string;
    slug: string;
    c_shortDescription: string;
    c_coverPhoto: {
      image: {
        url: string;
      };
    };
    c_publishedDate: string;
    c_author: string;
  }[];
}

const BlogSection = ({ blogs }: BlogSectionProps) => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights from our team.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogs?.map((blog) => (
            <article
              key={blog.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={blog.c_coverPhoto.image.url}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-gray-500">{blog.c_publishedDate}</time>
                  <a
                    href={blog.slug}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {blog.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={blog.slug}>
                      <span className="absolute inset-0" />
                      {blog.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {blog.c_shortDescription}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={blog.slug}>
                        <span className="absolute inset-0" />
                        {blog.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{blog.c_author}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
