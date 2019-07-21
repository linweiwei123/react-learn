import asyncComponent from '../../../components/AsyncComponent';
import Loading from '../../../components/loading/Loading';

const loadComponent = () => import ('./article');
const AsyncArticle = asyncComponent(loadComponent, Loading);

export default AsyncArticle;
