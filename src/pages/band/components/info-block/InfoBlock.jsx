import "./InfoBlock.scss";

export default function InfoBlock({ title, scrollRef }) {
    return (
        <div className="info-block" ref={scrollRef}>
            <h3 className="info-block__title">{title}</h3>
            <p className="info-block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
            <p className="info-block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
            <p className="info-block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptas magnam natus adipisci recusandae et inventore nihil. Saepe, accusantium placeat impedit ad sed ab maiores pariatur et fuga quibusdam. Doloribus.</p>
            <p className="info-block__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eligendi corporis, odit repellat at hic eius eveniet quisquam, quia aspernatur fuga error iure veniam? Amet eaque assumenda cum mollitia cumque?
                Sapiente in quae tempore aliquid voluptatibus iusto esse debitis maxime, ipsum ea quasi, molestiae libero culpa dignissimos odio saepe officiis optio consectetur. Pariatur voluptates tempore at dolores rem aliquid sequi.</p>
        </div>
    )
}
