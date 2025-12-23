import Link from 'next/link';

interface ArticleCardProps {
  href: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  tags: string[];
  title: string;
}

export default function ArticleCard({
  href,
  imageSrc,
  imageWidth,
  imageHeight,
  imageAlt,
  tags,
  title
}: ArticleCardProps) {
  return (
    <div className="article-cardinr grid">
      <div className="ac-media grid-6-fcol">
        <div className="ac-mediainr">
          <Link href={href}>
            <img
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div className="ac-cont gridr-6-lcol">
        <div className="ac-continr">
          <div className="ac-content">
            <div className="xs-body">
              {tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <h5>
              <Link href={href}>
                {title}
              </Link>
            </h5>
          </div>
          <div className="ac-link">
            <Link href={href} className="link-arrow link-pure-cacao">
              <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="initial"></path>
                </svg>
              </span>
              <span className="label">read article</span>
              <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd"
                    d="M8.375 2.79297L13.5821 8.00008L8.375 13.2072L7.66789 12.5001L11.6679 8.50008H2.625V7.50008H11.6679L7.66789 3.50008L8.375 2.79297Z"
                    fill="initial"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}