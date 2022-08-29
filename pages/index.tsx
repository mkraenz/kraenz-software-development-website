import Divider from "@material-ui/core/Divider";
import Contact from "../src/components/Contact";
import LatestWork from "../src/components/LatestWork";
import Layout from "../src/components/Layout";
import Services from "../src/components/Services";

export default function Index() {
    return (
        <Layout>
            <Divider />
            <LatestWork />
            <Divider />
            <Services />
            <Divider />
            <Contact />
        </Layout>
    );
}
