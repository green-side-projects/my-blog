import CategoriesPosts from "../components/CategoriesPosts";
import Hero from "../components/Hero";
import LatestPost from "../components/LatestPost";
import MostPopularPost from "../components/MostPopularPost";
import NewsLetter from "../components/_child/NewsLetter";
import Format from "../layout/format";

export default function Home() {
  return (
    <div>
      <Format>
        <Hero />
        <LatestPost />
        <MostPopularPost />
        <CategoriesPosts />
        <NewsLetter />
      </Format>
    </div>
  );
}
