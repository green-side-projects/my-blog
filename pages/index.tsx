import CategoriesPosts from "../components/CategoriesPosts";
import Hero from "../components/Hero";
import LatestPost from "../components/LatestPost";
import MostPopularPost from "../components/MostPopularPost";
import Format from "../layout/format";

export default function Home() {
  return (
    <div>
      <Format>
        <Hero />
        <LatestPost />
        <MostPopularPost />
        <CategoriesPosts />
      </Format>
    </div>
  );
}
