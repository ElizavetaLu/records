import RoundedCard from "../../../../components/cards/rounded/RoundedCard";
import Accordion from "../../components/accordion/Accordion";
import Sidebar from "../../components/sidebar/Sidebar";
import "./BandInformation.scss";


export default function BandInformation() {
    return (
        <section className="band-info">
            <div className="band-info__sidebar-container">
                <Sidebar />
            </div>
            <div className="band-info__content">
                <div className="band-info__block">
                    <h3 className="band-info__block-title">History</h3>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eligendi corporis, odit repellat at hic eius eveniet quisquam, quia aspernatur fuga error iure veniam? Amet eaque assumenda cum mollitia cumque?
                        Sapiente in quae tempore aliquid voluptatibus iusto esse debitis maxime, ipsum ea quasi, molestiae libero culpa dignissimos odio saepe officiis optio consectetur. Pariatur voluptates tempore at dolores rem aliquid sequi.</p>
                </div>
                <div className="band-info__block">
                    <h3 className="band-info__block-title">Artistry</h3>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum, pariatur nobis repellat corporis libero quia deserunt, dolore maiores provident distinctio? Eaque corporis quas voluptatum sint, cum voluptas suscipit harum?
                        Vel eum voluptatibus veniam laborum, quisquam quas excepturi error reprehenderit facere dicta incidunt distinctio debitis unde hic. In, facilis assumenda ut culpa cum itaque aspernatur tempore, totam mollitia necessitatibus suscipit.
                        Eum ullam dicta aperiam dolores vel dignissimos facilis in rem dolor dolorum reprehenderit, molestias, non iure perferendis earum unde ea eveniet quidem quia excepturi aspernatur ex! Quos provident illo dignissimos.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                </div>
                <div className="band-info__block">
                    <h3 className="band-info__block-title">Image and identities</h3>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                </div>
                <div className="band-info__block">
                    <h3 className="band-info__block-title">Feuds</h3>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                </div>

                <div className="band-info__block">
                    <h3 className="band-info__block-title">Albums</h3>
                    <Accordion data={['First album name', 'Second album name', 'Third album name', 'Fourth album name', 'Fifth album name', 'Sixth album name']} />
                </div>

                <div className="band-info__block">
                    <h3 className="band-info__block-title">Members</h3>
                    <ul className="band-info__list">
                        {
                            [1, 2, 3, 4, 5].map(item => {
                                return (
                                    <li key={item}>
                                        <RoundedCard />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="band-info__block">
                    <h3 className="band-info__block-title">Awards and nominations</h3>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, odio deleniti quas natus pariatur distinctio eos doloribus consequatur tempore soluta id amet in magni suscipit error eligendi incidunt commodi veniam!
                        Dignissimos aliquid itaque saepe quisquam nihil sed consectetur doloremque repellat, rem corrupti, aut molestias accusantium commodi vero. Architecto tenetur corporis ut praesentium, maxime, quod nihil neque, sequi qui nulla illum.
                        Ratione eveniet voluptatum, in aperiam nisi sint velit quam eaque hic veritatis, obcaecati perferendis rerum omnis quasi at! Vel labore autem commodi ipsa beatae fugit numquam aspernatur corrupti nam voluptate?</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                    <p className="band-info__block-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
                </div>
            </div>
        </section>
    )
}
