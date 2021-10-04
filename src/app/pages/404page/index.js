import { Layout } from "../../components/complex";
import errorimage from '../../assets/images/error.jpg';

function Nonexistantpage() {
    return(
        <Layout>
            <section className='error-section'>
                <img src={errorimage} alt='error' className='error-image' />
                <h2>Subpage you are looking for doesn't exist or has been deleted. Sorry!</h2>
            </section>
        </Layout>
    );
}

export default Nonexistantpage;