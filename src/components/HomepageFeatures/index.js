import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [{
    title: 'Fast to Use', Img: require('@site/static/img/icon/software.png').default, description: (<>
        A powerful, intuitive, and fast backend framework that allows you to develop web applications backend in
        a simple and efficient way
    </>),
}, {
    title: 'Focus on performance', Img: require('@site/static/img/icon/settings.png').default, description: (<>
        Developed with ExpressJS, it stands out for its efficient and fast
        performance, making it an excellent choice for projects of any size.
    </>),
}, {
    title: 'Powered for Developers', Img: require('@site/static/img/icon/cognitive.png').default, description: (<>
        Routing management through nomenclature, this framework allows you to develop web backend applications
        efficiently and intuitively.
    </>),
},];

function Feature({Img, title, description}) {
    return (<div className={clsx('col col--4')}>
        <div className="text--center">
            <img alt="Image aka" src={Img} className={styles.featureSvg}/>
        </div>
        <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>);
}

export default function HomepageFeatures() {
    return (<section className={styles.features}>
        <div className="container">
            <div className="row">
                {FeatureList.map((props, idx) => (<Feature key={idx} {...props} />))}
            </div>
        </div>
    </section>);
}
