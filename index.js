import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Navigo from 'navigo';

const router = new Navigo(location.origin);


const store = {
    'home': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ]
        },
        'title': 'Learnings',
        'page': `
            <main>

            <section class="float">
                <h2>Mission</h2>
                <p>Content</a>
            </section>
            <section>
                    <h2>Section 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid atque, impedit, distinctio exercitationem omnis esse hic quisquam magni quis fuga qui vel consequatur natus itaque iusto, fugit unde deserunt.</p>
                    <a href="#" class="cta-btn">Read More!</a>
                </section>
            </main>`
    },

    'about': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ]
        },
        'title': 'About Page',
        'page': ''
    },
    'contact': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ]
        },
        'title': 'Contact',
        'page': ''
    },
    'blog': {
        'links': {
            'primary': [ 'Home', 'About', 'Contact', 'Blog' ]
        },
        'title': 'Blog Page',

        'page': `
        <main>
            <section>


            </section>
        </main>
        <p>Loading blog posts!</p>
        `
    }
};


function render(state){
    document.querySelector('#root').innerHTML = `
        ${Navigation(state)}
        ${Header(state)}
        ${Main(state)}
        ${Footer(state)}
    `;

    router.updatePageLinks(); // Replaces our custom click event listeners with the recursive render.
}

render(store.home);

router
    .on(':view', function renderFromParams(params){
        render(store[params.view]);
    })
    .resolve();
