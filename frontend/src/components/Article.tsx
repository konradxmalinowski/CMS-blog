import { type Article as ArticleType } from './Articles';

import personIcon from '../assets/person.png';
import dateIcon from '../assets/date.png';
import { Link } from 'react-router-dom';
import ArticleWrapper from './ArticleWrapper';
import Category from './Category';

const Article = ({
  id,
  categories,
  title,
  preview,
  author,
  date,
  timeLong,
}: ArticleType) => {
  const wrapperStyles = 'flex items-center gap-x-3';

  return (
    <ArticleWrapper className="max-w-130 hover:scale-105 hover:transition-all hover:shadow-xl/20">
      <div className={wrapperStyles}>
        {categories.split('.').map((category, idx) => (
          <Category key={idx}>{category}</Category>
        ))}
      </div>
      <h1 className="text-xl font-medium my-5">{title}</h1>
      <p className="text-gray-600 mb-2.5">{preview}</p>
      <div className={wrapperStyles}>
        <span className="flex justify-center items-center gap-y-1.5">
          <img src={personIcon} alt="person icon" className="inline mr-1.5" />
          {author}
        </span>
        <span className="flex justify-center items-center gap-y-1.5">
          <img src={dateIcon} alt="date icon" className="inline mr-1.5" />
          {date}
        </span>
      </div>
      <div className="flex justify-between items-center mt-2.5">
        <span className="text-gray-600">{timeLong}</span>
        {/* add dynamic links  */}
        <Link to={`article/${id}`}>Read more -&gt;</Link>
      </div>
    </ArticleWrapper>
  );
};

export default Article;
