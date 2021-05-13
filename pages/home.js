import Footer from "../components/footer";
import Header from "../components/header";
import PostForm from "../components/post";
import Feed from "../components/feed";

export default function Home({ token, onLogout, username }) {
  return (
    <div className="h-screen">
      <div className="">
        <Header title="Talk Dev To Me" username={username} />
      </div>

      {/* Main Page div */}
      <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2">
        <div>
          <PostForm />
        </div>
        <div>
          <Feed />
        </div>

        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
