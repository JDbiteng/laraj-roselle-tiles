import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    image: i < 4 ? `/lovable-uploads/adbf0dd4-02a9-44e8-901c-ce17920213f3.png` : 
           (i === 5 || i === 6) ? `/lovable-uploads/aef985fd-5ac6-49be-913c-c92622e09731.png` : 
           `/placeholder.svg`,
  }));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest trends, tips, and inspiration for your tile and marble projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] group-hover:bg-gradient-to-br group-hover:from-card group-hover:to-primary/5">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-sm font-medium bg-primary/80 px-3 py-1 rounded-full backdrop-blur-sm">
                      Read Article
                    </span>
                  </div>
                </div>
                <div className="p-4 relative">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 group-hover:text-foreground/80 transition-colors duration-300">
                    Click to read more...
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;