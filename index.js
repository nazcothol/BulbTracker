import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Navigo from 'navigo';

const router = new Navigo(location.origin);


const store = {
    'home': {
        'links': {
            'primary': [ 'Track', 'Personal', 'Global', 'Guides', 'About']
        },
        'title': 'BulbTracker',
        'page': `
            <main>
            <!-- new secion beginning-->

            <body style="grid-row-gap: 0px; grid-column-gap: 0px; grid-gap: 0px;">
                <nav style="    ;grid-area:nav;"></nav>
                <header style="grid-area:head;">
                    <div>
                        <h1><img src="https://images.unsplash.com/photo-1534353341328-aede12f06b84?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjIwOTIyfQ" style="grid-area: 3 / 1 / 4 / 6;">BulbTracker</h1>
                    </div>
                </header>
                <main style="grid-area:main;">
                    <div></div>
                </main>
                <div class="pg-empty-placeholder" style="grid-area:ad;"></div>
                <footer class="pg-empty-placeholder" style="grid-area:footer;"></footer>
            <!-- new section end-->

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

    'track': {
        'links': {
            'primary': [ 'Home', 'Personal', 'Global', 'Guides', 'About']
        },
        'title': 'Tracking',
        'page': `
        <main>
            <section>


            </section>
        </main>
        <p>Tracking?</p>
        `
    },
    'personal': {
        'links': {
            'primary': [ 'Home', 'Track', 'Global', 'Guides', 'About']
        },
        'title': 'Personal',
        'page': `
        <main>
            <section>


            </section>
        </main>
        <p>Personal?</p>
        `
    },
    'global': {
        'links': {
            'primary': [ 'Home', 'Track', 'Personal', 'Guides', 'About']
        },
        'title': 'Global',

        'page': `
        <main>
            <section>


            </section>
        </main>
        <p>Global?</p>
        `
    },
    'guides': {
        'links': {
            'primary': [ 'Home', 'Track', 'Personal', 'Global', 'About']
        },
        'title': 'Guides',
        'page': `
        <main>
            <section>


            </section>
        </main>
        <p>Guides?</p>
        `
    },
    'about': {
        'links': {
            'primary': [ 'Home', 'Track', 'Personal', 'Global', 'Guides']
        },
        'title': 'About',
        'page': `
        <main>
            <section>


            </section>
        </main>
        <p>About?</p>
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
