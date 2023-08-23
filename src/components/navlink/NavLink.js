import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

// eslint-disable-next-line react/prop-types
export default function NavLink({ href, children }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a
        href="k"
        className={classNames('nav-link', {
          active: href === router.pathname,
        })}
      >
        {children}
      </a>
    </Link>
  );
}

// export NavLink;
