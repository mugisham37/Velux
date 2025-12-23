import ArticleCard from './ArticleCard';
import { articles } from './articlesData';

export default function BlogMainSection() {
  return (
    <div id="shopify-section-template--26430796398935__main" className="shopify-section">
      <section className="section-blog-section section-id-template--26430796398935__main relative-sec">
        <div className="container">
          <div className="blog-sec">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                href={article.href}
                imageSrc={article.imageSrc}
                imageWidth={article.imageWidth}
                imageHeight={article.imageHeight}
                imageAlt={article.imageAlt}
                tags={article.tags}
                title={article.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}