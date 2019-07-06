import asyncComponent from '../../common/components/AsyncComponent';
import Loading from '../../common/components/loading/Loading';

const loadComponent = () => import ('./article');
const AsyncArticle = asyncComponent(loadComponent, Loading);

export default AsyncArticle;
