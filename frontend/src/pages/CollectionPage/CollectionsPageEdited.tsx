import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

interface Collection {
    id: string;
    name: string;
    photo: string;
    category: string;
}

interface Props {
    collections: Collection[]; // Define the type of collections
}

const CollectionsPage: React.FC<Props> = ({ collections }) => {
    return (
        <div className={style.container}>
            <h1 className={style.title}> Колекції </h1>
            <div className={style.cardContainer}>
                {collections && collections.length > 0 ? (
                    collections.map((collection) => (
                        <Link to={`/collections/${collection.id}`} key={collection.id} className={style.card}>
                            <div className={style.cardImage}>
                                <img src={collection.photo} alt={collection.name} style={{ maxWidth: '100%' }} />
                                <p className={style.name}>{collection.name}</p>
                                <p className={style.category}>{collection.category}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p>No collections available</p>
                )}
            </div>
        </div>
    );
};

export default CollectionsPage;
