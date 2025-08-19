import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const blogPosts = {
    "1": {
      title: "Chatham: Bespoke Tile Designs for Timeless Charm",
      content: `Chatham's eclectic mix of historic colonials and modern homes needs tile and marble solutions that bridge old‑world charm with contemporary flair. At LaRaj Tile & Marble, we create custom installations that highlight your home's unique character.

Our most requested Chatham services:

• Custom mosaic foyer floors featuring heirloom patterns or bespoke designs
• Wood‑look porcelain flooring in great rooms that combines warmth with durability
• Accent wall tile installations in powder rooms—marble, glass, or metal mosaics for dramatic effect
• Travertine and porcelain pavers for charming patios and garden walkways
• Unique grout color pairings to make patterns pop and enhance your décor

Our design consultations at the Roselle Park showroom include digital mock‑ups and full‑scale sample boards so you can fine‑tune every detail—grout width, tile orientation, edge treatments, and sealant options—before installation begins.

With laser‑precise templating, moisture‑resistant underlays, and grout sealing technology, we ensure your Chatham installation stands the test of time.

Ready for a one‑of‑a‑kind tile experience in Chatham? Let's start your free design consultation today.`
    },
    "2": {
      title: "Madison: Sophisticated Marble Work for Distinguished Residences",
      content: `Madison's cultural venues, upscale boutiques, and refined neighborhoods deserve finishes that mirror their elegance. LaRaj Tile & Marble specializes in bespoke marble installations that add luxury, durability, and lasting value to Madison homes.

Our Madison portfolio includes:

• Veined Carrara and Calacatta countertops in gourmet kitchens
• Custom marble vanity tops with integrated under‑mount sinks
• In‑floor radiant heating systems beneath marble tile for unparalleled comfort
• Chevron and herringbone floor patterns that make grand entrances unforgettable
• Outdoor travertine and limestone patios that age gracefully outdoors

We partner with top quarries to source exclusive slabs and provide full‑service project management—from 3D conceptual renderings to precision fabrication in our NJ workshop. Our Roselle Park showroom features large panel displays so you can preview exact vein patterns and finishes in natural light.

Every marble installation is executed by our certified installers, ensuring perfect grout joints, seamless transitions, and professional sealing that protects against stains and wear.

Transform your Madison home with marble work that speaks to your discerning taste. Book your design consultation today.`
    },
    "3": {
      title: "Westfield: Bright, Modern Tile for Family‑Friendly Living",
      content: `Westfield's bustling downtown, top‑rated schools, and active lifestyle call for interiors that are both stylish and resilient. At LaRaj Tile & Marble, we craft tile solutions that stand up to everyday life while reflecting your personal style.

Our Westfield installations showcase:

• High‑gloss porcelain floors for easy maintenance and a sleek look
• Subway‑tile kitchen backsplashes with contrasting grout for visual interest
• Custom shower niches and built‑in benches for spa‑like bathrooms
• Slip‑resistant pool and patio tiling designed for safety and durability
• Large‑format porcelain slabs to minimize grout lines and create a seamless aesthetic

We understand Westfield's need for low‑maintenance surfaces that still exude warmth and sophistication. During your free Roselle Park showroom visit, we'll demonstrate cleaning techniques, grout sealing options, and the latest trends in tile patterns—so your home stays beautiful for years to come.

Our turnkey approach includes precise templating with laser-guided tools, professional sub‑floor preparation, and a meticulous installation process that meets industry best practices.

Bring bright, modern design into your Westfield home. Get started with a complimentary design consultation today.`
    },
    "4": {
      title: "Summit: Timeless Stonework That Honors Historic Charm",
      content: `Summit's picturesque neighborhoods blend historic architecture with modern amenities, creating a unique canvas for bespoke tile and marble installations. At LaRaj Tile & Marble, we specialize in honoring each home's character while integrating top‑tier materials and cutting‑edge design techniques.

Our Summit services include:

• Restoration of original marble hearths and mantels to their former glory
• Custom floor medallions and intricate border inlays that echo classic motifs
• Waterfall‑edge marble countertops in gourmet kitchens for streamlined elegance
• Designer powder‑room vanities with under‑mount sinks and decorative tile surrounds
• Weather‑proof patio and terrace tiling perfect for Summit's outdoor entertaining

Our experienced design team collaborates with Summit homeowners to select stone types—Carrara, Calacatta, Emperador—and finishes that complement your home's palette. We provide full‑service project management, including on‑site measurements, 3D renderings, and expert installation by our certified artisans.

From initial concept sketches to the final polish, every step is handled with precision. Plus, our Roselle Park showroom houses expansive slab displays and tile samples so you can touch, feel, and visualize your project before installation.

Elevate your Summit home with stonework that balances heritage and modern luxury. Schedule your design consultation now.`
    },
    "5": {
      title: "Berkeley Heights: Premium Tile Solutions for Modern Living",
      content: `Berkeley Heights homeowners appreciate quality, style, and functionality in equal measure. At LaRaj Tile & Marble, we deliver sophisticated tile installations that enhance your home's value while reflecting your personal aesthetic.

Our Berkeley Heights specialties include:

• Large-format porcelain floors that create seamless, contemporary spaces
• Designer backsplash installations featuring natural stone and glass mosaics
• Luxury vinyl tile that mimics hardwood with superior moisture resistance
• Custom shower systems with built-in niches and rainfall fixtures
• Outdoor kitchen and dining area installations perfect for entertaining

We understand Berkeley Heights' preference for clean lines and modern materials. Our Roselle Park showroom features the latest in tile technology—from anti-microbial surfaces to slip-resistant textures—all displayed in room-like settings so you can envision the final result.

Our certified installers use advanced leveling systems and premium adhesives to ensure every tile is perfectly aligned and permanently secured. We also offer comprehensive maintenance programs to keep your installation looking pristine for decades.

Transform your Berkeley Heights home with tile work that combines style and substance. Book your consultation today.`
    }
  };

  const currentPost = blogPosts[id as keyof typeof blogPosts];

  if (!currentPost) {
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
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

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
              {currentPost.title}
            </h1>
            <div className="text-muted-foreground">
              Published on {new Date().toLocaleDateString()}
            </div>
          </div>
          
          <div className="aspect-video bg-muted rounded-lg mb-8 overflow-hidden">
            <img
              src={parseInt(id || "0") <= 5 ? `/lovable-uploads/adbf0dd4-02a9-44e8-901c-ce17920213f3.png` : 
                   (parseInt(id || "0") === 6 || parseInt(id || "0") === 7) ? `/lovable-uploads/aef985fd-5ac6-49be-913c-c92622e09731.png` :
                   parseInt(id || "0") === 17 ? `/lovable-uploads/6b57e834-c6be-429c-8892-b787a95f916b.png` :
                   parseInt(id || "0") === 19 ? `/lovable-uploads/9d70774f-8cf6-412f-a6b1-c115f7050a9e.png` :
                   parseInt(id || "0") === 20 ? `/lovable-uploads/48993db1-e875-46e7-bae6-51ff24ff3da9.png` :
                   `/placeholder.svg`}
              alt={currentPost.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <div className="text-foreground text-lg leading-relaxed whitespace-pre-line">
              {currentPost.content}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;