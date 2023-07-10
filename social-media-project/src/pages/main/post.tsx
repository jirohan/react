import {Post as IPost} from './main-page';

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
    const {post} = props;
    return <div> </div>
}