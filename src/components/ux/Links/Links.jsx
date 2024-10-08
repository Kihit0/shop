import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Links = (props) => {
  const { links, classNameLink, classNameList, activeItem, classActive = 'active', onClick } = props;

  return (
    <ul {...{ className: classNameList }}>
      {links.map((link, idx) => {
        return (
          <li
            {...{
              className: classNames(classNameLink, {
                [classActive]: activeItem && activeItem?.href === link.href,
              }),
            }}
            key={idx}
          >
            <Link {...{ to: link.href, onClick }}>{link.content}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
