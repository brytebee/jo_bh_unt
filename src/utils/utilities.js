import ResumeSvg from '../../public/svgs/pepicons_cv.svg';
import CoverLetterSvg from '../../public/svgs/envelope.svg';
import PortfolioSvg from '../../public/svgs/portfolio.svg';
import JobsSvg from '../../public/svgs/home.svg';
import ApplicationsSvg from '../../public/svgs/application.svg';
import Cubex from '../../public/svgs/cubex.svg';

export const sideTabs = [
  { name: 'Dashboard', icon: Cubex },
  {
    name: 'Resume',
    icon: ResumeSvg,
  },
  { name: 'Cover Letter', icon: CoverLetterSvg },
  {
    name: 'Portfolio',
    icon: PortfolioSvg,
  },
  {
    name: 'Jobs',
    icon: JobsSvg,
  },
  {
    name: 'Applications',
    icon: ApplicationsSvg,
  },
];

export const activeTabStyle = {
  backgroundColor: 'rgba(197, 235, 253, 0.47)',
  padding: '5px',
  borderRadius: '0.5rem',
};
