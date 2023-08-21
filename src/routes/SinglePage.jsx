import { useParams } from 'react-router-dom';
const aboutData = [
    {
      slug: 'about-app',
      title: 'About the app',
      description:
        "This application lets us add to-dos, edit, and delete items. Log in to see the delete feature. It also persists to-dos in the browser's local storage for a subsequent visit.",
    },
    {
      slug: 'about-developer',
      title: 'About the developer',
      description:
        'Gillian Maronilla has built her first React single-page-app by following the tutorial written by Ibas Majid. Check out his website ibaslogic.com or follow him on X-Twitter @ibaslogic.',
    },
  ];



const SinglePage = () => {
    const {slug}  = useParams();
    console.log(aboutData)
    console.log(slug)
    const aboutContent = aboutData.find( (item) => item.slug === slug);
    console.log(aboutContent)
    if (!aboutContent) {
        return <div>Content not found</div>;
      }
    
    const { title, description } = aboutContent;


    
    return  (
        <div className="main_content">
           <h2>{title}</h2>
           <p>{description}</p>
        </div>
    )
}

export default SinglePage;