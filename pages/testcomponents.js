import { Container } from "../components/Container"
import Cube from "../components/Cube";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import Team from "../components/Team";
import Tech from "../components/Tech";
import Topresources from "../components/Topresources";
import { Instagram } from "../components/Instagram";


export default function Testcomponents() {
    return (
        <Container>
            <Nav />
            <Cube />
            <Topresources />
            <Tech />
            <Team />
            <Instagram/>
            <Footer></Footer>


        </Container >
    )



}