import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Post {id}
            </h1>
            <div className="text-muted-foreground">
              Published on {new Date().toLocaleDateString()}
            </div>
          </div>
          
          <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
            <img
              src="/placeholder.svg"
              alt={`Blog Post ${id}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <p className="text-muted-foreground text-center text-lg">
              Article content will be added here...
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;